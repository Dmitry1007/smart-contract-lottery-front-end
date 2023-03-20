import { useEffect } from "react"
import { useWeb3Contract } from "react-moralis"
import { useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../constants"

export default function LotteryEntrance() {
    const { chainId: chainIdHex, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const lotteryAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null

    // const { runContractFunction: enterLottery } = useWeb3Contract({
    //     abi: abi,
    //     contractAddress: lotteryAddress,
    //     functionName: "enterLottery" ,
    //     params: {},
    //     msgValue: ,
    // })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi: abi,
        contractAddress: lotteryAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    useEffect(() => {
        if (isWeb3Enabled) {
            async function updateUI() {
                const entranceFeeFromContract = await getEntranceFee()
                console.log("entranceFee ", entranceFeeFromContract)
            }
            updateUI()
        }
    }, [isWeb3Enabled])

    return <>Lottery Entrance</>
}
