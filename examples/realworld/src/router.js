import * as R from 'ramda'
import { createHashHistory } from 'history'
import { createRouter } from 'framework-x'
import * as api from './api'
import { evt } from './eventTypes'
import { fx } from './fx'
import { routes } from './routes'
import { dispatch, regEventFx, regFx } from './store'
import { getUser } from './user/selectors'
import { updateIn } from './util'


const ROUTE_HISTORY_LIMIT = 5

const history = createHashHistory()

const { pushNamedRoute, replaceNamedRoute, listen } = createRouter({ history, routes })

regFx('route', (_, args) => pushNamedRoute.apply(null, args))

regFx('redirect', (_, args) => replaceNamedRoute.apply(null, args))

const getRouteEffects = ({ db, match, type, route, query, prevRoute }) => {
  if (type === 'INITIAL' && getUser(db)) {
    dispatch(evt.API_REQUEST, [evt.GET_USER, api.auth.current()])
  }

  const onEnter =
    R.path(['onEnter'], route) &&
    R.path(['onEnter'], route)(db, match.params, query)

  const onExit =
    R.path(['onExit'], prevRoute) &&
    R.path(['onExit'], prevRoute)(db, match.params)

  if (onEnter || onExit) {
    return R.chain(R.identity, R.filter(R.identity, [onExit, onEnter]))
  }
  return []
}

regEventFx(evt.NAV_TO, ({ db }, [id, params, query]) => [
  fx.db(R.assocPath(['router', 'match'], {
    params,
    route: R.find(R.propEq('id', id), routes)
  })),
  ['route', [id, params, query]]
])

regEventFx(evt.ROUTE_CHANGED, ({ db }, locationAndMatch) => {
  const { match, type, search: query } = locationAndMatch
  const route = R.path(['match', 'route'], locationAndMatch)
  const prevRoute = R.path(['match', 'route'], R.head(R.pathOr([], ['router', 'history'], db)))

  const effects = getRouteEffects({ db, match, type, route, query, prevRoute })

  return [
    ['db', updateIn(['router'], ({ history = [] } = {}) => {
      const nextHistory = R.take(ROUTE_HISTORY_LIMIT, R.append(locationAndMatch, history))
      return R.assoc('history', nextHistory, locationAndMatch)
    })],
    ...effects
  ]
})

export const startRouter = () => listen(
  locationAndMatch => { dispatch(evt.ROUTE_CHANGED, locationAndMatch) })
