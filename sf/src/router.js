import Vue from 'vue'
import Router from 'vue-router'
import TicketQuery from './views/ticket_query.vue'
import ItineraryNumber from './views/Itinerary_number.vue'
import search_result from './views/search_result.vue'
import location_selection from './views/location_selection.vue'
import order_submission from './views/order_submission.vue'
import edit_travel from './views/edit_travel.vue'
import order_check from './views/order_check.vue'
import personal_payment from './views/personal_payment.vue'
import pay_status from './views/pay_status.vue'
import order_detail from './views/order_detail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history', //去掉地址栏的#号
  routes: [
    {
      path: '/',
      name: 'TicketQuery',
      component: TicketQuery
    },
    {
      path: '/ItineraryNumber',
      name: 'ItineraryNumber',
      component: ItineraryNumber
    },
    {
      path: '/search_result',
      name: 'search_result',
      component: search_result
    },
    {
      path: '/location_selection',
      name: 'location_selection',
      component: location_selection
    },
    {
      path: '/order_submission',
      name: 'order_submission',
      component: order_submission
    },
    {
      path: '/edit_travel',
      name: 'edit_travel',
      component: edit_travel
    },
    {
      path: '/order_check',
      name: 'order_check',
      component: order_check
    },
    {
      path: '/personal_payment',
      name: 'personal_payment',
      component: personal_payment
    },
    {
      path: '/pay_status',
      name: 'pay_status',
      component: pay_status
    },
    {
      path: '/order_detail',
      name: 'order_detail',
      component: order_detail
    }
  ]
})
