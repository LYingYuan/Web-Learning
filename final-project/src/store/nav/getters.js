export default {
  getAddresses(state) {
    return state.addresses;
  },
  getUserNavLinks(state) {
    return state.user_nav_links;
  },
  getGroupBookingLinks(state) {
    return state.group_booking_links;
  },
  getEnterpriseLinks(state) {
    return state.enterprise_links;
  },
  getCustomerServiceLinks(state) {
    return state.customer_service_links;
  },
  getSearchText(state) {
    return state.search_text;
  },
  getHotSearchWords(state) {
    return state.hot_search_words;
  },
};
