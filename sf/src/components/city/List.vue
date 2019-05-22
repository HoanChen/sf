<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area mar_b50">
				<div class="title border-topbottom bg_wimp mar_b20">当前</div>
				<div class="nowloc">
					<div class="inb mar_r40">{{ this.currentCity }}</div>
					<span class="aginloc">
						<img src="../../assets/image/loc.png" alt="" srcset="" />
						<span class="color108 font24">重新定位</span>
					</span>
				</div>
			</div>
			<div class="area mar_b30">
				<div class="title border-topbottom bg_wimp mar_b20">热门城市</div>
				<div class="button-list font26">
					<div
						v-for="item of hot"
						:key="item.id"
						@click="handleCityClick(item.name)"
						class="button-wrapper"
					>
						<div class="button">{{ item.name }}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{ key }}</div>
				<ul class="item-list">
					<li
						class="font24"
						v-for="innerItem of item"
						:key="innerItem.id"
						@click="handleCityClick(innerItem.name)"
					>
						<div class="border-bottom pdb20">
							{{ innerItem.name }}
							<div class="float-r">
								阿尔泰机场
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
	name: "CityList",
	props: {
		hot: Array,
		cities: Object,
		letter: String
	},
	computed: {
		...mapState({
			currentCity: "city"
		})
	},
	data() {
		return {};
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper, {
			click: true
		});
	},
	watch: {
		letter() {
			if (this.letter) {
				const element = this.$refs[this.letter][0];
				this.scroll.scrollToElement(element);
			}
		}
	},
	methods: {
		handleCityClick(city) {
			// this.$store.dispatch('changeCity', city)
			// this.$store.commit('changeCity', city)
			this.changeCity(city);
			var type = this.$route.params.stype
			this.$router.push({name:'TicketQuery',params:{'address':city,'stype':type}})
		},
		...mapMutations(["changeCity"])
	}
};
</script>

<style  scoped>
/* .border-topbottom {
	&:before {
		border-color: #ccc;
	}
	&:after {
		border-color: #ccc;
	}
}
.border-bottom {
	&:before {
		border-color: #ccc;
	}
} */
.border-bottom {
	border-bottom: 1px solid #e5e5e5;
}
.pdb20{
	padding-bottom: .2rem
}
.nowloc {
	padding-left: 0.2rem;
}
.nowloc div {
	width: 1.56rem;
	height: 0.54rem;
	border: 1px solid #9e9e9e;
	border-radius: 0.03rem;
	text-align: center;
	line-height: 0.54rem;
	font-size: 0.26rem;
	color: #108ee9;
}
.aginloc img {
	width: 0.2rem;
	margin-right: 0.1rem;
}

.list {
	overflow: hidden;
	position: absolute;
	top: 0.92rem;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
}
.list .title {
	color: #666;
	padding: 0.11rem 0.2rem;
	font-size: 0.26rem;
	background: #f0f3f6;
}

.button-list {
	padding-left: 0.2rem;
}
.button-list .button-wrapper {
	display: inline-block;
	width: 25%;
	margin-bottom: 0.15rem;
}
.button-list .button-wrapper .button {
	padding: 0.1rem 0;
	width: 1.56rem;
	border-radius: 0.03rem;
	text-align: center;
	border: 1px solid #ccc;
}

.item-list li {
	color: #666;
	padding: .24rem 0.2rem 0 0.2rem ;
	cursor: pointer;
}
</style>
