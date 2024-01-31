// Generate a random 32-character hexadecimal string
function generateSecretKey() {
    return [...Array(32)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join('');
  }
  
  console.log("🚀 Starting port " + (process.env.PORT || 3001));
  
  Bun.serve({
    hostname: "::",
    port: process.env.PORT || 3001,
    fetch: async (req: Request) => {
      const secretKey = generateSecretKey();
      return new Response(secretKey);
    },
  });
  