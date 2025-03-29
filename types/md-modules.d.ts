declare module '*.md' {
    const attributes: { [key: string]: any };
    const react: React.ComponentType;
    export { attributes, react };
  }