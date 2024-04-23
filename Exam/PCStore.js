function solve(input) {
    let CPUprice = Number(input[0]);
    let GPUprice = Number(input[1]);
    let RAMprice = Number(input[2]);
    let RAMnum = Number(input[3]);
    let discount = Number(input[4]);

    let USDtoBGN = 1.57;

    let totalPriceUSD =  (CPUprice + GPUprice) * (1 - discount) + RAMprice * RAMnum;
    let totalPriceBGN = totalPriceUSD * USDtoBGN;

    console.log(`Money needed - ${totalPriceBGN.toFixed(2)} leva.`);

}

solve(["500",
"200",
"80",
"2",
"0.05"])

