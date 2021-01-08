<template>
	<header class="header">
					
		<div class="header__row row">

			<a href="#" class="header__company">
				<svg class="header__logo" width="40" height="40">
					<use xlink:href="@/assets/img/sprite.svg#logo"></use>
				</svg>
				Videoservice
			</a>

			<form class="header__search search">
				<input class="search__input" type="search" placeholder="Search...">
				<button class="search__button button button--simple" type="submit">Search</button>
			</form>

			<button type="button" class="button button--rect">Sign up</button>

		</div>
	</header>
	<!-- header -->
</template>