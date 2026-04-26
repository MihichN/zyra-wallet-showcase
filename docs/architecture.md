# Architecture

```text
Wallet Dashboard -> Balance View Model -> API Client
        |
        v
 Address / QR / Activity Components
```

## Notes

- UI formatting is separated from wallet provider logic.
- Sensitive signing operations are not performed in public frontend code.
- Balance presentation is deterministic and testable.
- Address and QR flows are treated as display concerns.
