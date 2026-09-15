# Integration Test Workspace

This repository contains two related Hardhat projects:

- `contract-layer` — the canonical smart contract implementation and tests (TransactionRegistry).
- `pqc/blockchain` — a lightweight location for pqc-related tests that reference the `Transaction` contract name.

Quick commands (from workspace root):

1. Run `contract-layer` tests:

```bash
cd contract-layer
npm install
npx hardhat test
```

2. Run `pqc/blockchain` tests locally (first install dependencies inside `pqc/blockchain`):

```bash
cd pqc/blockchain
npm install
npx hardhat test
```

Notes:
- The `pqc/blockchain/hardhat.config.js` is configured to read contract sources from `../../contract-layer/contracts` so the `Transaction` artifact resolves to the canonical implementation.
- I committed these changes to a local branch `use-contract-layer`; push to your remote as desired:

```bash
git checkout use-contract-layer
git push origin use-contract-layer
```
