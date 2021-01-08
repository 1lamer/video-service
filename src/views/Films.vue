<template>
	<section class="films">

		<section class="films__newest newest">

			<h2 class="newest__title title">&#128293; Newest</h2>

			<ul class="newest__list">

				<li class="newest__item">
					<a href="#" class="newest__link">
							<img src="@/assets/img/films/tenet.jpg" alt="poster" class="newest__poster">

							<p class="newest__description">
								Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.
							</p>

						<h3 class="newest__name">Tenet</h3>
					</a>
				</li>

				<li class="newest__item">
					<a href="#" class="newest__link">
						<img src="@/assets/img/films/batman.jpg" alt="poster" class="newest__poster">

						<p class="newest__description">
								New Batman as Pattinson is coming! Watch the trailer!
						</p>

						<h3 class="newest__name">Batman</h3>
					</a>
				</li>

				<li class="newest__item">
					<a href="#" class="newest__link">
						<img src="@/assets/img/films/gentlman.jpg" alt="poster" class="newest__poster">

						<p class="newest__description">
								An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him.
						</p>

						<h3 class="newest__name">The Gentlemen</h3>
					</a>
				</li>

				<li class="newest__item">
					<a href="#" class="newest__link">
						<img src="@/assets/img/films/devilallthetime.jpg" alt="poster" class="newest__poster">

						<p class="newest__description">
								Sinister characters converge around a young man devoted to protecting those he loves in a postwar backwoods town teeming with corruption and brutality.
						</p>

						<h3 class="newest__name">The Devil All the Time</h3>
					</a>
				</li>
			</ul>
			<!-- newest__list -->
		</section>
		<!-- newest -->

		<section class="films__genre genres">

			<h2 class="genres__title title">&#127917; Genres</h2>

			<ul class="genres__list">

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--comedies">
						&#128513;
						<h3 class="genres__name">Comedies</h3>
					</a>
				</li>

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--dramas">
						&#128546;
						<h3 class="genres__name">Dramas</h3>
					</a>
				</li>

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--fantasy">
						&#128125;
						<h3 class="genres__name">Fantasy</h3>
					</a>
				</li>

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--horrors">
						&#128123;
						<h3 class="genres__name">Horrors</h3>
					</a>
				</li>
			</ul>
			<!-- genres__list -->
		</section>
		<!-- genree -->
	</section>
	<!-- films -->
</template>

<script>

export default {
	name: 'Films',
	components: {
	}
}
</script>
