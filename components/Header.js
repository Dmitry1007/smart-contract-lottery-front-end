import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <>
            Decentralized Lottery
            <ConnectButton moralisAuth={false} />
        </>
    )
}
