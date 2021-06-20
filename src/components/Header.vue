<style lang='scss' scoped>
	.header {
		.header-top-bar {
			height: 25px;
			background-color: #000000;
		}
		.header-main-bar {
			min-height: 50px;
			background-color: #1e2228;
			.header-main-bar-links {
				color: #ffffff;
				font-size: 14px;
			}
		}
	}
</style>

<template>
	<div class='header'>
		<div class='header-top-bar'></div>
		<div class='header-main-bar pt-2 pb-2 pl-5 pr-5 d-flex'>
			<a href='/' class='flex-grow-1'>
				<img src='https://assets.website-files.com/58f8c11edebda71c7384a149/58f8c11edebda71c7384a1f0_white%20logo.png' width='100'>
			</a>
			<div class='header-main-bar-links d-flex align-items-center'>
				<router-link to='/about-us' class='text-white mr-3 font-weight-bold'>
					About Us
				</router-link>
				<router-link to='/demo' class='text-white font-weight-bold'>
					Demo
				</router-link>
			</div>
		</div>
	</div>
</template>