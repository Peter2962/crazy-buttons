<template>
	<div class='demo-ui d-flex align-items-center justify-content-center flex-direction-column'>
		<h3 class='mb-4'>Crazy Buttons Demo</h3>
		<div class='form-group mb-3 text-center'>
			<input type='number' class='form-control' v-model='numberOfButtons'>
			<a href='' @click.prevent='resetButtonCreation'>Reset buttons</a>
		</div>
		<div id='demo_ui_target' class='demo-ui-target d-flex flex-direction-column'></div>
	</div>
</template>

<script>
	import Swal from 'sweetalert2';

	export default {
		data() {
			return {
				buttonClicks: {},
				numberOfButtons: 2,
				customAction: (button, customButtonId) => {
					console.log('Executing button clicks');

					// Create a record for each button if it doesn't exist already.
					if (!Object.keys(this.buttonClicks).includes(customButtonId)) {
						this.buttonClicks[customButtonId] = 1;
						console.log(this.buttonClicks);
					}else{
						// If the record exists already, just increment the value
						this.buttonClicks[customButtonId] += 1;
					}

					Swal.fire({
						title: 'Hey!',
						text: `This button has been clicked ${this.buttonClicks[customButtonId]} time(s)`,
						icon: 'info',
						confirmButtonText: 'Close'
					});
				}
			}
		},

		methods: {
			resetButtonCreation() {
				document.getElementById('demo_ui_target').innerHTML = '';
				this.createButtons();
			},
			createButtons() {
				this.$initializeCrazyButton({
					targetContainer: 'demo_ui_target',
					numberOfButtons: this.numberOfButtons,
					extraActions: [
						this.customAction
					]
				});
			}
		},

		mounted() {
			this.createButtons();
		}
	}
</script>