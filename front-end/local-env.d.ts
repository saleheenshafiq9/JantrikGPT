declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_SERVER: string
    }
  }
}

export {}
