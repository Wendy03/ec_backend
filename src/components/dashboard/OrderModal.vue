<template>
  <!-- Order Modal -->
  <div class="modal fade"
       id="orderModal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true">
    <div class="modal-dialog"
         role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title"
              id="exampleModalLabel">顧客資料</h5>
          <button type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <ul>
            <li>Email: {{order.user.email}}</li>
            <li>收件人姓名: {{order.user.name}}</li>
            <li>收件人電話: {{order.user.tel}}</li>
            <li>收件人地址: {{order.user.address}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Toast from '../../utils/Toast';

export default {
  data() {
    return {
      order: {
        user: {},
      },
    };
  },
  methods: {
    getOrder(id) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`;
      this.$http.get(url)
        .then((res) => {
          this.order = res.data.data;
          $('#orderModal').modal('show');
        })
        .catch(() => {
          Toast.fire({
            title: '無法取得資料，稍後再試',
            icon: 'error',
          });
        });
    },
  },
};
</script>
