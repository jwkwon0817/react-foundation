# React Foundation

- Stack
- HStack
- VStack

## Installation

```sh
# npm
npm i @jwkwon0817/react-foundation

# yarn
yarn add @jwkwon0817/react-foundation

# pnpm
pnpm add @jwkwon0817/react-foundation

# bun
bun add @jwkwon0817/react-foundation
```

<br />

Add the code below to the top of the code.

```ts
import '@jwkwon0817/react-foundation/styles.css';
```

## Example

### Stack

```tsx
<Stack direction={Direction.HORIZONTAL}>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</Stack>
```

### HStack

```tsx
<HStack spacing={10}>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</HStack>
```

### VStack

```tsx
<VStack spacing={10}>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</VStack>
```

## LICENSE

[MIT LICENSE](https://github.com/jwkwon0817/react-foundation/blob/main/LICENSE)
