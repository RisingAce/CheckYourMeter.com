import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-4 px-4 border-t">
      <div className="container mx-auto flex flex-col items-center text-sm text-muted-foreground space-y-2">
        <div>
          <span>Created by </span>
          <Link 
            href="https://x.com/Harryjwilliamss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mx-1 text-blue-600 hover:text-blue-800 transition-colors"
          >
            Harry Williams
          </Link>
        </div>
        <div>
          <Link 
            href="https://city-scope.co.uk" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Check out City Scope
          </Link>
        </div>
      </div>
    </footer>
  )
} 