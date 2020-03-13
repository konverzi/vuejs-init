import axios from "axios";

async function getinfo({ commit }) {
  const { data } = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );
  commit("SETDATA", data);
}

export default {
  getinfo
};
