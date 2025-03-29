import React, { useState } from 'react';

function BettingCalculator() {
  const [bet1Odds, setBet1Odds] = useState('');
  const [bet2Odds, setBet2Odds] = useState('');
  const [stake, setStake] = useState('');
  const [payouts, setPayouts] = useState([0, 0, 0, 0]);
  const [totalPayout, setTotalPayout] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [roi, setRoi] = useState(0);

  const calculate = () => {
    const numBet1Odds = parseFloat(bet1Odds);
    const numBet2Odds = parseFloat(bet2Odds);
    const numStake = parseFloat(stake);

    if (isNaN(numBet1Odds) || isNaN(numBet2Odds) || isNaN(numStake)) {
      alert('Please enter valid numbers.');
      return;
    }

    // Basic calculations - assuming two bets
    const bet1Payout = numBet1Odds * numStake;
    const bet2Payout = numBet2Odds * numStake;

    setPayouts([bet1Payout, bet2Payout, 0, 0]); // Assuming only two bets for now
    setTotalPayout(bet1Payout + bet2Payout);
    setTotalProfit(bet1Payout + bet2Payout - numStake);
    setRoi(((bet1Payout + bet2Payout - numStake) / numStake) * 100);
  };

  const reset = () => {
    setBet1Odds('');
    setBet2Odds('');
    setStake('');
    setPayouts([0, 0, 0, 0]);
    setTotalPayout(0);
    setTotalProfit(0);
    setRoi(0);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#333' }}>
      <div style={{ backgroundColor: '#222', padding: '2rem', borderRadius: '8px', width: '30rem', color: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Enter Odds & Stake</h2>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Bet 1</label>
          <input
            type="text"
            value={bet1Odds}
            onChange={(e) => setBet1Odds(e.target.value)}
            placeholder="Please Enter Bet 1 Odds"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', backgroundColor: '#444', color: 'white', border: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Bet 2</label>
          <input
            type="text"
            value={bet2Odds}
            onChange={(e) => setBet2Odds(e.target.value)}
            placeholder="Please Enter Bet 2 Odds"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', backgroundColor: '#444', color: 'white', border: 'none' }}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Stake</label>
          <input
            type="text"
            value={stake}
            onChange={(e) => setStake(e.target.value)}
            placeholder="Please Enter Stake"
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', backgroundColor: '#444', color: 'white', border: 'none' }}
          />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
          <button style={{ backgroundColor: '#555', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none' }}>More Bets</button>
          <button onClick={reset} style={{ backgroundColor: '#555', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none' }}>Reset</button>
        </div>

        <button onClick={calculate} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '1rem', borderRadius: '4px', width: '100%', border: 'none', marginBottom: '1.5rem' }}>
          CALCULATE
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {payouts.map((payout, index) => (
            <div key={index} style={{ backgroundColor: '#444', padding: '0.5rem', borderRadius: '4px', textAlign: 'center' }}>
              ${payout.toFixed(2)}
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '0.5rem' }}>Total Payout: ${totalPayout.toFixed(2)}</div>
        <div style={{ marginBottom: '0.5rem' }}>Total Profit: ${totalProfit.toFixed(2)}</div>
        <div>ROI: {roi.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default BettingCalculator;