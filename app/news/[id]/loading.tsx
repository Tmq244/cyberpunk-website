export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-neon-cyan/30 border-t-neon-cyan" />
        <p className="font-mono text-sm text-muted-foreground">正在加载新闻内容...</p>
      </div>
    </div>
  )
}
