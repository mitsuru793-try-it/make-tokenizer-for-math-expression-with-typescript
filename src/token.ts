// How to build a math expression tokenizer using JavaScript (or any other language)
// https://www.freecodecamp.org/news/how-to-build-a-math-expression-tokenizer-using-javascript-3638d4e5fbe9/

const main = (): void => {
  const tokens = tokenize("89sin(45) + 2.2x/7");
  tokens.forEach((token, index) => {
    console.log(`${index} => ${token.type} (${token.value})`)
  });
}

interface Token {
  type: string
  value: string
}

const tokenize = (str): Token[] => {
  const result: Token[] = []
  str.replace(/\s+/g, "").split("").forEach((char, idx) => {
    if (isDigit(char)) {
      result.push({type: "Literal", value: char})
    } else if (isLetter(char)) {
      result.push({type: "Variable", value: char})
    } else if (isOperator(char)) {
      result.push({type: "Operator", value: char})
    } else if (isLeftParenthesis(char)) {
      result.push({type: "Left Parenthesis", value: char})
    } else if (isRightParenthesis(char)) {
      result.push({type: "Right Parenthesis", value: char})
    } else if (isComma(char)) {
      result.push({type: "Function Argument Separator", value: char})
    }
  })
  return result
}

const isComma = (ch: string): boolean => ch === ","

const isDigit = (ch: string): boolean => /\d/.test(ch)

const isLetter = (ch: string): boolean => /[a-z]/i.test(ch)

const isOperator = (ch: string): boolean => /[+\-*/^]/.test(ch)

const isLeftParenthesis = (ch: string): boolean => ch === '('

const isRightParenthesis = (ch: string): boolean => ch === ')'

main()
