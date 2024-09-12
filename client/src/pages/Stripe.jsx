export default function Stripe() {
  return (
    <div style={{ textAlign: "center", paddingTop: "40px" }}>
      <script async src="https://js.stripe.com/v3/buy-button.js"></script>

      <stripe-buy-button
        buy-button-id="buy_btn_1Py05lF01JqNLAHwQDT21mme"
        publishable-key="pk_live_51PxySpF01JqNLAHwhlHX9dxXPEvBW8Vqu172b0bjfdv3nAMZ6sXEc3ZIliidr2s3qJPyAIrzPktAd54VtBdTlb5p009XZ3QL6b"
      ></stripe-buy-button>
    </div>
  );
}
