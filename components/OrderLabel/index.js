export default function OrderLabel({ order }) {
  console.log(order)
  return (
    <div id='order-label'>
      <div
        style={{
          boxSizing: 'border-box',
          fontSize: '16px',
          height: '370px',
          maxWidth: '460px',
          border: '2px dotted #1b1b1b33',
          margin: '15px',
          borderRadius: '5px',
          padding: '10px',
          gap: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          fontFamily:
            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        <div
          style={{
            boxSizing: 'border-box',
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '60px',
            gap: '10px',
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              border: '1px solid #1b1b1b99',
              display: 'flex',
              padding: '5px',
              alignItems: 'center',
              height: '100%',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: 'center',
              width: '100px',
            }}
          >
            {order.transport}
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              border: '1px solid #1b1b1b99',
              display: 'flex',
              padding: '5px',
              alignItems: 'center',
              height: '100%',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: 'center',
              width: '60%',
              flexDirection: 'column',
            }}
          >
            <small>PEDIDO</small>
            {order.orderId}
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              alignItems: 'center',
              border: '1px solid #1b1b1b99',
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
              height: '100%',
              justifyContent: 'center',
              padding: '5px',
              textAlign: 'center',
              width: '100px',
            }}
          >
            <small>BULTOS:</small>
            {order.cant}
          </div>
        </div>
        <div
          style={{
            boxSizing: 'border-box',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            height: '100%',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div
            style={{
              boxSizing: 'border-box',
              border: '1px solid #1b1b1b99',
              textAlign: 'center',
              width: '100%',
            }}
          >
            ENCOMIENDA A <strong>{order.type}</strong>
          </div>
          <div
            style={{
              boxSizing: 'border-box',
              alignItems: 'center',
              border: '1px solid #1b1b1b99',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              justifyContent: 'space-between',
              padding: '0 5px',
              width: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <small
                style={{
                  fontSize: '10px',
                  fontWeight: '900',
                }}
              >
                REMITENTE
              </small>
              <p
                style={{
                  fontSize: '10px',
                }}
              ></p>
            </div>
            <hr
              style={{
                width: '100%',
              }}
            />
            <div
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              <small
                style={{
                  fontSize: '10px',
                  fontWeight: '900',
                }}
              >
                DESTINATARIO
              </small>
              <p
                style={{
                  fontSize: '10px',
                }}
              >
                {order.name} <br />
                <strong>{order.cuit ? order.cuit : order.document}</strong> <br />
                TEL: {order.tel} <br />({order.cp}) {order.street} {order.streetHeight} {order.flat && order.flat}{' '}
                {order.department && order.department} - {order.location} - {order.province} <br />
                {order.specification && (
                  <>
                    {order.specification} <br />
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            boxSizing: 'border-box',
            border: '1px solid #1b1b1b99',
            textAlign: 'center',
            width: '100%',
            fontSize: '14px',
          }}
        >
          <small>NO RECIBIR EL PEDIDO SI EL PAQUETE ESTA ABIERTO O DAÑADO</small>
        </div>
      </div>
    </div>
  )
}
