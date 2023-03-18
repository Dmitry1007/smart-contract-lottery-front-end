import { useMoralis } from "react-moralis"

export default function ManualHeader() {
    const { enableWeb3 } = useMoralis()

    return (
        <>
            <button onClick={async () => await enableWeb3}>Connect</button>
        </>
    )
}
