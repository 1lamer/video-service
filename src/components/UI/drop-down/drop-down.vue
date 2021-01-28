<template>
	<nav role="navigation" class="drop-down">
		<ul class="drop-down__list">
			<li class="drop-down__item">
				<button
					class="drop-down__btn"
					tabindex="0"
					@click="$emit('click')"
				>
					Profile
				</button>
			</li>
			<li class="drop-down__item">
				<button
					class="drop-down__btn"
					tabindex="0"
					@click="$emit('click', 'signout')"
				>
					Sign out
				</button>
			</li>
		</ul>
	</nav>
</template>

<script>
	
	export default {
		name: 'drop-down',
		components: {

		},
		data: () => ({

		}),
	}
</script>

<style lang="scss">

	.drop-down {
		position: absolute;
		top: 100%;
		left: 0;

		min-height: 100%;
		width: 100%;

		box-shadow: 0px 6px 27px 0px rgba(51,51,51,0.68);

		&__list {
			li ul {
				visibility: hidden;
				opacity: 0;
				position: absolute;
				transition: all 0.5s ease;
				margin-top: 1rem;
				left: 0;
				display: none;
			}

			// li:hover > ul,
			// ul li:focus-within > ul,
			// li ul:hover {
			// 	visibility: visible;
			// 	opacity: 1;
			// 	display: block;
			// }

			// li ul li {
			// 	clear: both;
			// 	width: 100%;
			// }
		}

		&__item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			background-color: #fff;

			// transition: all .3s;

			&:hover, &:focus, &:active {
				background-color: $primary-color;

				.drop-down__btn {
					color: #fff;
				}

				// .drop-down__list {
				// 	visibility: visible;
				// 	opacity: 1;
				// 	display: block;
				// }
			}
		}

		&__btn {
			padding: 12px 25px;

			cursor: pointer;

			color: $primary-color;

			&:active {
				transform: translate(0);
			}
		}
	}

</style>
