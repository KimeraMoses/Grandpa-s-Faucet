import { baseUrl } from "..";
import {
  fetchTransactionsFail,
  fetchTransactionsPending,
  fetchTransactionsSuccess,
} from "../Slices/transactionsSlice";

export const fetchTransactions =
  (AuthToken, apiToken) => async (dispatch) => {
    dispatch(fetchTransactionsPending());
    try {
      const response = await fetch(`${baseUrl}/transaction/list/5`, {
        method: "GET",
        headers: new Headers({
          "Content-type": "application/json",
          apiKey: "asdfasdfasdfasdfasfasfasdf",
          apiToken: apiToken,
          Authorization: "Bearer " + AuthToken,
        }),
      });
      const fetchedTransactions = await response.json();
      console.log("Trans", fetchedTransactions.data);
        dispatch(fetchTransactionsSuccess(fetchedTransactions.data));
    } catch (error) {
        dispatch(fetchTransactionsFail(error.message));
      console.log(error);
    }
  };


  // export const CreateTransaction = (wallet_uuid, amount,token_uuid, apiToken, AuthToken) => {
  //   return async (dispatch) => {
  //     dispatch(createWalletPending());
  //     if (address && address.length>0) {
  //         const response = await fetch(`${baseUrl}/transaction/`, {
  //           method: "POST",
  //           body: JSON.stringify({
  //             wallet_uuid,
  //             amount,
  //             token_uuid
  //           }),
  //           headers: new Headers({
  //             "Content-type": "application/json",
  //             apiKey: "asdfasdfasdfasdfasfasfasdf",
  //             apiToken: apiToken,
  //             Authorization: "Bearer " + AuthToken,
  //           }),
  //         });
  
  //         if (!response.ok) {
  //           const error = await response.json();
  //           dispatch(createWalletFail(error));
  //           console.log(error);
  //         }
  //         const res = await response.json();
  //         console.log(res);
  //         dispatch(createWalletSuccess(res.data));
  //         localStorage.setItem("Wallet", JSON.stringify(res.data));
  //       }else{
  //         return
  //       }
  //   };
  // }
