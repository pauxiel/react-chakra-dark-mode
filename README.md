## React Chakra Dark mode starter

To change color of the body background, go to app.js and locate this palce

```
 <>
      <Global
        styles={css`
          body {
            background: ${colorMode === "light" ? "white" : "#1a202c"};
          }
        `}
      />
      {children}
    </>

```

change the 'white" to whatever white you want, and change "#1a202c" to whatever dark you want

to change the color of each component
locate the usecolormodevalue and change it from there
