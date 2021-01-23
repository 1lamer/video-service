<template>
	<div id="snackbar" :class="{show: isShow}">
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'snackbar',
	components: {

	},
	data: () => ({
	}),
	props: {
		isShow: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		isShow() {
			setTimeout(() => {
				this.$emit('isShow')
			}, 2000) 
		}
	}
}
</script>

<style lang="scss">

#snackbar {
	position: fixed; /* Sit on top of the screen */
  z-index: 1000; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  top: 30px; /* 30px from the bottom */

  display: none;
  visibility: hidden; /* Hidden by default. Visible on click */

  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */

  background-color: #333; /* Black background color */
  
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
.show {
	display: block !important;
  visibility: visible !important; /* Show the snackbar */

/* Add animation: Take 0.5 seconds to fade in and out the snackbar.
However, delay the fade out process for 1.5 seconds */
   animation: fadein 0.5s, fadeout 0.5s 1.5s;
  // -webkit-animation: fadein 0.5s, fadeout 0.5s 1.5s;
}

/* Animations to fade the snackbar in and out */
// @-webkit-keyframes fadein {
  // from {bottom: 0; opacity: 0;}
	// to {bottom: 30px; opacity: 1;}
// }

@keyframes fadein {
    from {top: 0; opacity: 0;}
    to {top: 30px; opacity: 1;}
}

// @-webkit-keyframes fadeout {
  // from {bottom: 30px; opacity: 1;}
  // to {bottom: 0; opacity: 0;}
// }

@keyframes fadeout {
   from {top: 30px; opacity: 1;}
   to {top: 0; opacity: 0;}
}
</style>
