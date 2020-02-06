import React from 'react'
import {motion, useAnimation} from 'framer-motion'
import handleViewport from 'react-in-viewport'

/* In order to stagger the children, we have to create variants and matching key-pairs for both the parent and children, such as "start" and "end". Then we use the key-pair label name that we want in start()*/
const loadingContainerVariants = {
  start: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.8
    }
  },
  end: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.8
    }
  }
}

const lineVariants = {
  start: {
    scaleX: 0,
  },
  end: {
    scaleX: 1,
    transition: {duration: 1.2}
  },
}

function animateOnce({...props}) {
  if (props.enterCount === 0 && props.inViewport) {
    // props.windowsControl.start({ opacity: 1, transition: {duration: 0.8} })
    props.lineControls.start('end')
  }
}

function LessCodeBlock({width, minWidth, maxHeight, forwardedRef, inViewport, enterCount}) {
  const windowsControl = useAnimation()
  const lineControls = useAnimation()

  return (
    <svg
      css={{
        width: width,
        minWidth: minWidth,
        maxHeight: maxHeight,
      }}
      viewBox="0 0 698 268"
      ref={forwardedRef}
      style={animateOnce({
        inViewport,
        enterCount,
        windowsControl,
        lineControls,
      })}>
      <motion.g id="Group_4610" transform="translate(-6647 -3653)" initial={{ opacity: 1 }} animate={windowsControl}>
        <g id="Group_4594" transform="translate(6304 3175)">
          <g id="Rectangle_Copy_2" transform="translate(343 478)">
            <path fill="#FFFFFF" d="M334.5,267.5H6.8l-6.3-5.7L7.1,4.5l321.2-4l6.2,5.7V267.5z"/>
            <path fill="#141515"
                  d="M328.1,1L7.6,5L1,261.6l6,5.4h327V6.4L328.1,1 M328.5,0l6.5,6v262H6.6L0,262L6.6,4L328.5,0z"/>
          </g>
          <path id="Path_890" fill="none" stroke="#141515" d="M670.9,739.3l6.7,6.2"/>
          <g id="Rectangle_Copy_4" transform="translate(343 478)">
            <rect fill="#FFFFFF" width="328" height="262"/>
            <rect x="0.5" y="0.5" fill="none" stroke="#141515" strokeMiterlimit="10" width="327" height="261"/>
          </g>
          <rect id="Rectangle_58" x="343" y="478" fill="#141515" width="328" height="20"/>
          <path id="Path_5817" fill="#FFFFFF" d="M355,484c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S352.8,484,355,484z"/>
          <path id="Path_5816" fill="#FFFFFF" d="M367,484c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S364.8,484,367,484z"/>
          <path id="Path_5815" fill="#FFFFFF" d="M379,484c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S376.8,484,379,484z"/>
          <path id="Path_5814" fill="#FFFFFF" d="M472.5,492h1v-3.4h3.4v-0.9h-3.4v-2.6h3.8v-0.9h-4.7V492z M478.9,492h5.1v-0.8h-2.5v-2
			c0-1.3,0.5-2.1,1.6-2.1h1v-0.9H483c-0.7,0-1.3,0.4-1.5,1h0l-0.1-0.9h-2.2v0.8h1.4v4.1h-1.6V492z M487.8,492.1
			c0.7,0,1.4-0.3,1.8-0.9h0l0.1,0.8h0.8v-3.8c0-1.1-0.9-2-2-2c-0.1,0-0.2,0-0.2,0c-1-0.1-2,0.6-2.1,1.6c0,0,0,0.1,0,0.1h0.9
			c0-0.5,0.4-1,1.2-1c0.6-0.1,1.2,0.3,1.3,1c0,0.1,0,0.1,0,0.2v0.4h-1.4c-1.6,0-2.3,0.8-2.3,1.8c0,1,0.8,1.8,1.8,1.8
			C487.6,492.1,487.7,492.1,487.8,492.1z M487.9,491.3c-0.8,0-1.2-0.4-1.2-1c0-0.7,0.5-1,1.4-1h1.4v0.5
			C489.5,490.7,488.8,491.3,487.9,491.3C488,491.3,487.9,491.3,487.9,491.3L487.9,491.3z M496.2,486.3c-0.5,0-1,0.4-1,0.9h0
			c0-0.5-0.5-1-1-0.9c0,0,0,0-0.1,0c-0.5,0-1,0.4-1,0.9h0l-0.1-0.8h-0.7v5.6h0.9v-3.7c0-0.8,0.3-1.2,0.7-1.2c0.4,0,0.6,0.4,0.6,0.9
			v4h0.8v-3.7c0-0.9,0.2-1.2,0.7-1.2s0.6,0.4,0.6,0.8v4.1h0.9v-4C497.3,487,497.2,486.3,496.2,486.3L496.2,486.3z M501.4,492.1
			c1.1,0.1,2.1-0.6,2.3-1.7h-0.9c-0.2,0.6-0.8,1-1.4,0.9c-1,0-1.6-0.7-1.6-1.8h4V489c0-1.6-0.8-2.7-2.4-2.7c-1.7,0-2.5,1.3-2.5,2.9
			C498.9,490.8,499.8,492.1,501.4,492.1z M499.9,488.7c-0.1-0.8,0.5-1.5,1.4-1.6c0.1,0,0.1,0,0.2,0c0.8,0,1.5,0.6,1.5,1.4
			c0,0.1,0,0.2,0,0.2H499.9z M506.1,492h1l0.9-4.4h0l0.9,4.4h1.1l0.8-5.5v-0.1h-0.8l-0.5,4.4h0l-0.9-4.4h-0.9l-0.9,4.4h0l-0.5-4.4
			h-0.8v0.1L506.1,492z M514.6,492.1c1.8,0,2.5-1.3,2.5-2.9c0-1.6-0.8-2.9-2.5-2.9s-2.5,1.3-2.5,2.9S512.9,492.1,514.6,492.1z
			 M514.6,491.3c-1.1,0-1.6-0.9-1.6-2.1c0-1.2,0.5-2.1,1.6-2.1s1.6,0.9,1.6,2.1S515.8,491.3,514.6,491.3L514.6,491.3z M518.7,492
			h5.1v-0.8h-2.5v-2c0-1.3,0.5-2.1,1.6-2.1h1v-0.9h-1.1c-0.7,0-1.3,0.4-1.5,1h0l-0.1-0.9h-2.2v0.8h1.4v4.1h-1.6V492z M525.7,483.9
			v8.1h0.9v-8.1H525.7z M527.8,488.8l2.3-2.4v-0.1H529l-2.4,2.5l2.5,3.2h1.1v-0.1L527.8,488.8z M532.9,489.2h3.4v-0.9h-3.4V489.2z
			 M538.5,492h1l1.7-3.1h0l1.6,3.1h1v-0.1l-2-3.7v0l1.9-3.7v-0.1h-1l-1.6,3.1h0l-1.6-3.1h-1v0.1l1.9,3.7v0l-2,3.7V492z"/>
        </g>
        <g id="Group_4596" transform="translate(6667 3175)">
          <g id="Rectangle_Copy_2-2" transform="translate(343 478)">
            <path fill="#FFFFFF" d="M334.5,267.5H6.8l-6.3-5.7L7.1,4.5l321.2-4l6.2,5.7V267.5z"/>
            <path fill="#141515"
                  d="M328.1,1L7.6,5L1,261.6l6,5.4h327V6.4L328.1,1 M328.5,0l6.5,6v262H6.6L0,262L6.6,4L328.5,0z"/>
          </g>
          <path id="Path_890-2" fill="none" stroke="#141515" d="M670.9,739.3l6.7,6.2"/>
          <g id="Rectangle_Copy_4-2" transform="translate(343 478)">
            <rect fill="#FFFFFF" width="328" height="262"/>
            <rect x="0.5" y="0.5" fill="none" stroke="#141515" strokeMiterlimit="10" width="327" height="261"/>
          </g>
          <g id="Group_4595" transform="translate(0 17)">
          </g>
          <rect id="Rectangle_58-2" x="343" y="478" fill="#141515" width="328" height="20"/>
          <path id="Path_5820" fill="#FFFFFF" d="M355,484c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S352.8,484,355,484z"/>
          <path id="Path_5819" fill="#FFFFFF" d="M367,484c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S364.8,484,367,484z"/>
          <path id="Path_5818" fill="#FFFFFF" d="M379,484c2.2,0,4,1.8,4,4s-1.8,4-4,4s-4-1.8-4-4S376.8,484,379,484z"/>
        </g>
        <path id="Path_5865" fill="#FFFFFF" d="M7127.5,3667.1c2,0,2.8-1.7,2.8-3.9c0-2.3-0.8-4-2.8-4s-2.8,1.7-2.8,3.9
		C7124.7,3665.4,7125.5,3667.1,7127.5,3667.1z M7127.5,3666.2c-1.5,0-1.8-1.4-1.8-3s0.3-3.1,1.8-3.1c1.5,0,1.8,1.4,1.8,3
		S7129,3666.2,7127.5,3666.2z M7134.1,3667h1.7v-0.8h-1.5c-0.5,0-0.7-0.2-0.7-0.8v-3.3h2.3v-0.8h-2.3v-1.5h-0.9v1.5h-1.8v0.8h1.7
		v3.3C7132.6,3666.4,7133,3667,7134.1,3667z M7137.1,3667h0.9v-3.1c0-1.1,0.6-1.8,1.5-1.8c0.7-0.1,1.3,0.4,1.3,1.1
		c0,0.1,0,0.2,0,0.3v3.5h0.9v-3.7c0.1-1-0.6-2-1.7-2.1c-0.1,0-0.2,0-0.3,0c-0.7,0-1.4,0.3-1.7,1h0v-3.4h-0.9V3667z M7145.4,3667.1
		c1.1,0.1,2.1-0.6,2.3-1.7h-0.9c-0.2,0.6-0.8,1-1.4,0.9c-1,0-1.6-0.7-1.6-1.8h4v-0.5c0-1.6-0.8-2.7-2.4-2.7c-1.7,0-2.5,1.3-2.5,2.9
		C7142.8,3665.8,7143.7,3667.1,7145.4,3667.1z M7143.8,3663.7c-0.1-0.8,0.5-1.5,1.4-1.6c0.1,0,0.1,0,0.2,0c0.8,0,1.5,0.6,1.5,1.4
		c0,0.1,0,0.2,0,0.2H7143.8z M7148.7,3667h5.1v-0.8h-2.5v-2c0-1.3,0.5-2.1,1.6-2.1h1v-0.9h-1.1c-0.7,0-1.3,0.4-1.5,1h0l-0.1-0.9
		h-2.2v0.8h1.4v4.1h-1.6V3667z M7160.7,3667h4.8v-0.8h-2v-4.1h2v-0.8h-2v-1c0-0.4,0.3-0.8,0.7-0.9c0.1,0,0.1,0,0.2,0h1.2v-0.8h-1.4
		c-0.9-0.1-1.6,0.6-1.6,1.5c0,0.1,0,0.1,0,0.2v1h-2v0.8h2v4.1h-2L7160.7,3667z M7166.5,3667h5.1v-0.8h-2.5v-2c0-1.3,0.5-2.1,1.6-2.1
		h1v-0.9h-1.1c-0.7,0-1.3,0.4-1.5,1h0l-0.1-0.9h-2.2v0.8h1.4v4.1h-1.6L7166.5,3667z M7174.6,3667.1c0.7,0,1.4-0.3,1.8-0.9h0l0.1,0.8
		h0.8v-3.8c0-1.1-0.9-2-2-2c-0.1,0-0.2,0-0.2,0c-1-0.1-2,0.6-2.1,1.6c0,0,0,0.1,0,0.1h0.9c0-0.5,0.4-1,1.2-1c0.6-0.1,1.2,0.3,1.3,1
		c0,0.1,0,0.1,0,0.2v0.4h-1.4c-1.6,0-2.3,0.8-2.3,1.8c0,1,0.8,1.8,1.8,1.7C7174.5,3667.1,7174.6,3667.1,7174.6,3667.1z
		 M7174.8,3666.3c-0.8,0-1.2-0.4-1.2-1c0-0.7,0.5-1,1.4-1h1.4v0.5C7176.4,3665.7,7175.7,3666.3,7174.8,3666.3
		C7174.8,3666.3,7174.8,3666.3,7174.8,3666.3L7174.8,3666.3z M7182.4,3661.3c-0.5,0-1,0.4-1,0.9h0c0-0.5-0.5-0.9-1-0.9
		c0,0,0,0-0.1,0c-0.5,0-1,0.4-1,0.9h0l-0.1-0.8h-0.7v5.6h0.9v-3.7c0-0.8,0.3-1.2,0.7-1.2c0.4,0,0.6,0.4,0.6,0.9v4h0.8v-3.7
		c0-0.9,0.2-1.2,0.7-1.2s0.6,0.4,0.6,0.8v4.1h0.9v-4C7183.5,3662,7183.3,3661.3,7182.4,3661.3z M7186.9,3667.1
		c1.1,0.1,2.1-0.6,2.3-1.7h-0.9c-0.2,0.6-0.8,1-1.4,0.9c-1,0-1.6-0.7-1.6-1.8h4v-0.5c0-1.6-0.8-2.7-2.4-2.7c-1.7,0-2.5,1.3-2.5,2.9
		C7184.3,3665.8,7185.2,3667.1,7186.9,3667.1z M7185.3,3663.7c-0.1-0.8,0.5-1.5,1.4-1.6c0.1,0,0.1,0,0.2,0c0.8,0,1.5,0.6,1.5,1.4
		c0,0.1,0,0.2,0,0.2H7185.3z M7190.9,3667h1l0.9-4.4h0l0.8,4.4h1.1l0.8-5.5v-0.1h-0.8l-0.5,4.4h0l-0.9-4.4h-0.9l-0.9,4.4h0l-0.5-4.4
		h-0.8v0.1L7190.9,3667z M7198.7,3667.1c1.8,0,2.5-1.3,2.5-2.9c0-1.6-0.8-2.9-2.5-2.9c-1.7,0-2.5,1.3-2.5,2.9
		S7196.9,3667.1,7198.7,3667.1z M7198.7,3666.3c-1.1,0-1.6-0.9-1.6-2.1s0.5-2.1,1.6-2.1s1.6,0.9,1.6,2.1
		S7199.8,3666.3,7198.7,3666.3L7198.7,3666.3z M7202.1,3667h5.1v-0.8h-2.5v-2c0-1.3,0.5-2.1,1.6-2.1h1v-0.9h-1.1
		c-0.7,0-1.3,0.4-1.5,1h0l-0.1-0.9h-2.2v0.8h1.4v4.1h-1.6V3667z M7208.3,3658.9v8.1h0.9v-8.1H7208.3z M7210.4,3663.8l2.3-2.4v-0.1
		h-1.1l-2.4,2.5l2.5,3.2h1.1v-0.1L7210.4,3663.8z M7216.5,3667.1c1.2,0,2.2-0.6,2.2-1.6c0-1-0.5-1.4-1.6-1.6l-0.9-0.2
		c-0.6-0.1-0.9-0.4-0.9-0.8c0-0.6,0.5-0.8,1.1-0.8c0.7,0,1.2,0.3,1.2,1h0.9c0-1.1-0.9-1.8-2.1-1.8c-1.2,0-2,0.7-2,1.6
		c0,0.8,0.6,1.5,1.4,1.6l1.1,0.2c0.6,0.1,0.9,0.4,0.9,0.8c0,0.5-0.5,0.8-1.3,0.8s-1.4-0.4-1.4-1.1h-0.9c0,1.1,1,2,2.1,2
		C7216.4,3667.1,7216.4,3667.1,7216.5,3667.1z"/>
      </motion.g>
      <motion.g id={'framework-x'}
                transform="translate(0 17)"
                variants={loadingContainerVariants}
                initial="start"
                animate={lineControls}>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5821" fill="#2DCD8C"
                     d="M19,35h245v12H19V35z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5822" fill="#2DCD8C"
                     d="M45,59h123v12H45V59z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5823" fill="#2DCD8C"
                     d="M45,82h175v12H45V82z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5824" fill="#2DCD8C"
                     d="M19,106h57v12H19V106z"/>
      </motion.g>
      <motion.g id={'other-frameworks'}
                variants={loadingContainerVariants}
                initial="start"
                animate={lineControls}>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5821-2" fill="#E4E6EB" d="M382,52h245v12H382V52z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5822-2" fill="#E4E6EB" d="M408,76h123v12H408V76z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5823-2" fill="#E4E6EB" d="M408,99h175v12H408V99z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5824-2" fill="#E4E6EB" d="M382,123h57v12h-57V123z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5825" fill="#E4E6EB" d="M382,147h240.7v12H382V147z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5826" fill="#E4E6EB" d="M411,171h163v12H411V171z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5827" fill="#E4E6EB" d="M411,194h182v12H411V194z"/>
        <motion.path variants={lineVariants} style={{originX: 0}} id="Path_5828" fill="#E4E6EB" d="M411,218h104v12H411V218z"/>
      </motion.g>
    </svg>
  )
}

export const LessCodeDiagram = handleViewport(LessCodeBlock, {}, {disconnectOnLeave: true})
