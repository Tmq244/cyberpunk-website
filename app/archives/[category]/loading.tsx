export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neon-cyan border-t-transparent" />
        <p className="font-mono text-sm text-muted-foreground">正在加载档案数据...</p>
      </div>
    </div>
  )
}
