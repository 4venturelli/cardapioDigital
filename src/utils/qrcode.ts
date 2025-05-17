import QRCode from 'qrcode'

interface QRCodeOptions {
  width?: number
  margin?: number
  color?: {
    dark: string
    light: string
  }
}

export async function generateTableQRCode(
  baseUrl: string,
  tableNumber: string,
  options: QRCodeOptions = {}
) {
  const url = `${baseUrl}?table=${tableNumber}`
  
  const defaultOptions: QRCodeOptions = {
    width: 300,
    margin: 2,
    color: {
      dark: '#DC2626', // Vermelho da espetaria
      light: '#FFFFFF'
    }
  }

  try {
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      ...defaultOptions,
      ...options
    })
    return qrCodeDataUrl
  } catch (error) {
    console.error('Error generating QR code:', error)
    throw error
  }
}

export async function generateQRCodeHTML(
  baseUrl: string,
  tableNumber: string,
  options: QRCodeOptions = {}
) {
  const qrCodeDataUrl = await generateTableQRCode(baseUrl, tableNumber, options)
  
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>QR Code Mesa ${tableNumber}</title>
        <style>
          body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            font-family: Arial, sans-serif;
          }
          .qr-container {
            text-align: center;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
          }
          .table-number {
            font-size: 24px;
            font-weight: bold;
            margin: 10px 0;
            color: #DC2626;
          }
        </style>
      </head>
      <body>
        <div class="qr-container">
          <img src="${qrCodeDataUrl}" alt="QR Code Mesa ${tableNumber}" />
          <div class="table-number">Mesa ${tableNumber}</div>
        </div>
      </body>
    </html>
  `
} 