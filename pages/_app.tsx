import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider, useAddress  } from "@thirdweb-dev/react";
import { Toaster } from 'react-hot-toast'
import { WalletChatProvider, WalletChatWidget } from 'react-wallet-chat';

function MyApp({ Component, pageProps }: AppProps) {
  const address = useAddress();
  const walletName = "metamask"

  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <WalletChatProvider>
        <Component {...pageProps} />
        <Toaster />

        <WalletChatWidget
          connectedWallet={
            address && walletName && ChainId
              ? {
                  walletName: walletName,
                  account: address,
                  chainId: ChainId?.Mumbai,
                }
              : undefined
          }
        />

      </WalletChatProvider>
    </ThirdwebProvider>
  ) 
}

export default MyApp
