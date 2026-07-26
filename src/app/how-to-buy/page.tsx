import "../style.css";

export default function HowToBuy() {
  return (
    <>
      <nav>
        <a href="/" className="logo" style={{ textDecoration: "none" }}>
          <svg
            fill="inherit"
            viewBox="-2.5 -2.5 19 19"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              verticalAlign: "middle",
              marginRight: "6px",
              marginTop: "-2px",
            }}
          >
            <path d="M12.382 5.304 10.096 7.59l.006.02L11.838 14a.908.908 0 0 1-.211.794l-.573.573a.339.339 0 0 1-.566-.08l-2.348-4.25-.745-.746-1.97 1.97a3.311 3.311 0 0 1-.75.504l.44 1.447a.875.875 0 0 1-.199.79l-.175.176a.477.477 0 0 1-.672 0l-1.04-1.039-.018-.02-.788-.786-.02-.02-1.038-1.039a.477.477 0 0 1 0-.672l.176-.176a.875.875 0 0 1 .79-.197l1.447.438a3.322 3.322 0 0 1 .504-.75l1.97-1.97-.746-.744-4.25-2.348a.339.339 0 0 1-.08-.566l.573-.573a.909.909 0 0 1 .794-.211l6.39 1.736.02.006 2.286-2.286c.37-.372 1.621-1.02 1.993-.65.37.372-.279 1.622-.65 1.993z" />
          </svg>
          ZARAIR
        </a>
      </nav>

      <main className="how-to-page">
        <a href="/" className="back-link">
          &larr; Back to Home
        </a>

        <div className="how-to-header">
          <h1>How to Buy ZARAI</h1>
          <p>
            New to crypto? Follow these steps to purchase ZARAI tokens through
            the verified sale contract on BNB Chain.
          </p>
        </div>

        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Install MetaMask</h3>
            <ul className="step-list">
              <li>
                Visit{" "}
                <a href="https://metamask.io/download" target="_blank" rel="noreferrer">
                  metamask.io
                </a>{" "}
                and download the browser extension.
              </li>
              <li>
                MetaMask is available for Chrome, Firefox, Brave, and Edge.
              </li>
              <li>
                Click &ldquo;Add to Browser&rdquo; and confirm the extension
                installation.
              </li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Create Your Wallet</h3>
            <ul className="step-list">
              <li>
                Open MetaMask and click &ldquo;Create a new wallet.&rdquo;
              </li>
              <li>Set a strong password to lock MetaMask on this device.</li>
              <li>
                <strong>
                  Write down your 12-word Secret Recovery Phrase
                </strong>{" "}
                on paper. This is the only way to recover your wallet.
              </li>
              <li>
                Never share your phrase with anyone. MetaMask staff will never
                ask for it.
              </li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Get USDT (BEP-20)</h3>
            <ul className="step-list">
              <li>ZARAI tokens are purchased with USDT on BNB Chain.</li>
              <li>
                Buy USDT on an exchange and withdraw it using the{" "}
                <strong>BNB Smart Chain (BEP-20)</strong> network.
              </li>
              <li className="step-warning">
                Do NOT withdraw via ERC-20 or other networks — your funds will
                not arrive on BNB Chain.
              </li>
              <li>
                You can verify your USDT contract is correct on{" "}
                <a
                  href="https://bscscan.com/token/0x55d398326f99059fF775485246999027B3197955"
                  target="_blank"
                  rel="noreferrer"
                >
                  BscScan
                </a>
                .
              </li>
            </ul>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Buy ZARAI</h3>
            <ul className="step-list">
              <li>
                Click <strong>&ldquo;Connect Wallet&rdquo;</strong> on the{" "}
                <a href="/">home page</a> to link your MetaMask.
              </li>
              <li>
                Click <strong>&ldquo;Buy Now&rdquo;</strong> and enter the
                amount of ZARAI you want to purchase.
              </li>
              <li>
                First, approve MetaMask to spend your USDT, then confirm the
                purchase.
              </li>
              <li>
                Each transaction requires a confirmation in your MetaMask popup
                — review the details and click Confirm.
              </li>
              <li>
                After confirmation, your ZARAI balance will update
                automatically.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-bottom">
            <p>&copy; 2026 ZARAIR Token. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
