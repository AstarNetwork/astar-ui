<template>
	<div :class="`modal ${isShow ? 'show' : ''} ${fadeClass}`" @click="close">
		<div
			class="modal-content"
			:class="isAnimation && zoomInClass"
			:style="`width: ${width}px; height: ${height}px;`"
		>
			<span class="close" @click="close">&times;</span>
			<div class="title">{{ title }}</div>
			<slot />
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, watchEffect, toRefs } from "vue";

	const fadeInClass = "fade-in";
	const fadeOutClass = "fade-out";
	const zoomInClass = "zoom-in";

	export default defineComponent({
		name: "SimpleModal",
		props: {
			show: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
			},
			width: {
				type: Number,
			},
			height: {
				type: Number,
			},
			isAnimation: {
				type: Boolean,
				default: false,
			},
		},
		emits: ["close"],
		setup(props, { emit }) {
			const isShow = ref(props.show);
			const fadeClass = ref<string>(props.isAnimation ? fadeInClass : "");

			watchEffect(() => {
				if (isShow.value !== props.show) {
					isShow.value = props.show;
				}
			});

			const close = (e: any) => {
				const openClass = `modal show${
					props.isAnimation ? " " + fadeInClass : ""
				}`;

				if (e.target.className === openClass || e.target.className === "close") {
					if (props.isAnimation) {
						fadeClass.value = fadeOutClass;
						// Memo: defined in scss
						const animatedDuration = 200;
						setTimeout(() => {
							emit("close");
							fadeClass.value = fadeInClass;
						}, animatedDuration);
						return;
					} else {
						emit("close");
					}
				}
			};

			return {
				...toRefs(props),
				isShow,
				close,
				fadeClass,
				zoomInClass,
			};
		},
	});
</script>

<style lang="scss" scoped>
	@import "../../styles/main.scss";
	@import "../../styles/animation.scss";

	.modal {
		display: none; /* Hidden by default */
		position: fixed;
		z-index: 10;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		text-align: center;
		background: rgba(255, 255, 255, 0.5);
		backdrop-filter: blur(8px);
		@supports (-moz-appearance: none) {
			background: $backdrop-transparent-dark-firefox !important;
		}
	}
	.modal.show {
		display: flex;
	}

	.modal-content {
		box-shadow: 0 0 15px 4px #00000030;
		border-radius: 6px;
		background-color: $gray-1;
		margin: auto;
		padding: 20px;
		border: 0px solid transparent;
		width: 22.5rem;
		height: auto;

		@media (min-width: $xs) {
			width: 375px;
		}
		@media (min-width: $sm) {
			width: 395px;
		}
	}

	.title {
		display: flex;
		justify-content: center;
		font-style: normal;
		font-weight: 590;
		font-size: 1.375rem;
		line-height: 1.625rem;
		letter-spacing: -0.02em;
		margin-top: -0.6rem;
		color: $gray-5;
	}

	.close {
		display: flex;
		color: #b1b7c1;
		justify-content: flex-end;
		font-size: 1.775rem;
		font-weight: 330;
		cursor: pointer;
		margin-top: 0.2rem;
		margin-right: 0.8rem;
		@media (min-width: $sm) {
			margin-right: 12.8px;
		}
	}

	.close:hover {
		color: #d8e2f1;
	}

	.fade-in {
		@include fade-in-animation;
	}

	.fade-out {
		@include fade-out-animation;
	}

	.zoom-in {
		animation: zoom-in-animation 0.2s ease-in;
	}

	.body--dark {
		.modal {
			background: rgba(25, 29, 31, 0.5);

			.modal-content {
				box-shadow: 0 0 15px 4px #00000080;
				background-color: $gray-5;

				.title {
					color: $gray-1;
				}
			}
		}
	}

	@media screen and (max-width: 500px) {
		.modal-content {
			width: 100% !important;
			position: absolute;
			top: 0;
			margin: 0;
			padding-left: 0;
			padding-right: 0;
			padding-bottom: 40px;
			box-shadow: -5px 2px 8px 4px rgba(0, 0, 0, 0.5);
		}
	}
</style>
