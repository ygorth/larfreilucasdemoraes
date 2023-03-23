import React, { useState, useRef, useEffect } from 'react';

const Paypal = () => {
  const [paid, setPaid] = useState(false);
  const [loaded, setLoaded] = useState(false);

  let paypalRef = useRef();

  const product = {
    price: 20.00,
    description: 'Doação',
  };

  function loadButtons() {
    setTimeout(() => {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: product.description,
                  amount: { currency_code: 'BRL', value: product.price },
                },
              ],
            });
          },
          onApprove: async (_, actions) => {
            const order = await actions.order.capture();

            setPaid(true);
            console.log(order);
          },
        })
        .render(paypalRef);
    });
  }

  useEffect(() => {
    const script = document.createElement('script');
    const id =
      'AeoMLw30xJgAlzNYTPpXfzfXh_exdBLWPH3mAn5DMeqcHRXukuiRNbismn0McoErSMtsWiPryAjvpFYc';
    script.src = `https://www.paypal.com/sdk/js?currency=BRL&client-id=${id}`;

    script.addEventListener('load', () => setLoaded(true));

    document.body.appendChild(script);
    if (loaded) {
      loadButtons();
    }
  });

  return (
    <>
      <div>
        {paid ? (
          <div>Obrigado Pela Sua doação</div>
        ) : (
          <div>
            {product.description} R${product.price}
            <div ref={(v) => (paypalRef = v)}></div>
          </div>
        )}
      </div>
    </>
  );
};

export default Paypal;
