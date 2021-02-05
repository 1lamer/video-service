<template>
	<header class="header">
					
		<div class="header__row row">

			<router-link to='/' class="header__company">
				<svg class="header__logo" width="40" height="40" fill="#E5261E">
					<use xlink:href="@/assets/img/sprite.svg#logo"></use>
				</svg>
				<span class="header__company-name">Videoservice</span>
			</router-link>

			<search />

			<account />

		</div>
	</header>
	<!-- header -->
</template>


<script>
import search from '@/components/UI/search/search'
import account from '@/components/header/account'

export default {
	components: {
		search,
		account
	}
}
</script>
