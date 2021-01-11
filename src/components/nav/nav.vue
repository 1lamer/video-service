<template>
	<nav class="nav">
		<router-link to="/" class="nav__item">
			Home
		</router-link>
		<router-link to="/films" class="nav__item">
			Movies
		</router-link>
		<router-link to="/shows" class="nav__item">
			TV Shows
		</router-link>
	</nav>
</template>


<style lang="scss">

	.nav {

		&__item {
			
			&.router-link-exact-active {
				box-shadow: 0 2px 0 0 $primary-color;

				color: $primary-color;
			}
		}
	}
</style>