"use client";

import { useId, useState } from "react";
import {
  FEE_RATE,
  PRICE_DEFAULT,
  PRICE_MAX,
  PRICE_MIN,
  PRICE_STEP,
  REPAIR_RATE,
} from "@/content/home";

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});
const pct = (value: number) => `${Math.round(value * 1000) / 10}%`;

export function CostReceipt() {
  const id = useId();
  const [price, setPrice] = useState(PRICE_DEFAULT);
  const fee = Math.round(price * FEE_RATE);
  const repairs = Math.round(price * REPAIR_RATE);
  const takeHome = price - fee - repairs;

  return (
    <div className="receipt">
      <div className="receipt-top">
        <h3 className="receipt-title">Sample offer breakdown</h3>
        <span className="cost-sample">Sample</span>
      </div>
      <label htmlFor={id} className="receipt-label">Sample home price</label>
      <input id={id} className="receipt-range" type="range" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} value={price} aria-valuetext={usd.format(price)} onChange={(event) => setPrice(Number(event.target.value))} />
      <div className="receipt-scale" aria-hidden="true"><span>{usd.format(PRICE_MIN)}</span><span>{usd.format(PRICE_MAX)}</span></div>
      <dl className="receipt-rows">
        <div><dt>Offer price</dt><dd>{usd.format(price)}</dd></div>
        <div><dt>Service fee ({pct(FEE_RATE)})</dt><dd>−{usd.format(fee)}</dd></div>
        <div><dt>Repairs ({pct(REPAIR_RATE)})</dt><dd>−{usd.format(repairs)}</dd></div>
      </dl>
      <div className="receipt-total">
        <span className="receipt-total-label">You take home</span>
        <output htmlFor={id} className="receipt-take">{usd.format(takeHome)}</output>
      </div>
      <p className="receipt-note">Your real offer shows these same lines. Percentages are sample figures, not a quote.</p>
    </div>
  );
}
