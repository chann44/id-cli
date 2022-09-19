import { ethers, providers } from "ethers";
import { createId, setNodeEnv } from "@fetcch/id";
// wallet
const main = async () => {
  setNodeEnv(false);
  const wallet = ethers.Wallet.createRandom();
  const msg = await wallet.signMessage("wagpay did this");

  // wallet ka info

  const id = createId({
    apiKey: "ac50417c-6bc1-4368-b3e9-e399998879a4",
    data: {
      assumeHighSecurity: false,
      wagpayId: "satyam@wagpay",
      default: {
        address: wallet.address,
        network: 1,
      },
      others: [],
      signedMsg: msg,
    },
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log(id);
};

main();
