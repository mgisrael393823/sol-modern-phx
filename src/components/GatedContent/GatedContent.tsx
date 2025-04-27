
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface GatedContentProps {
  children: React.ReactNode;
  title: string;
}

export function GatedContent({ children, title }: GatedContentProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="relative">
      <div 
        className="blur-sm pointer-events-none" 
        aria-hidden="true"
      >
        {children}
      </div>
      
      <div 
        className="absolute inset-0 bg-background/50 flex items-center justify-center cursor-pointer"
        onClick={() => setIsDialogOpen(true)}
      >
        <Button variant="outline" className="bg-background">
          Click to Unlock {title}
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Unlock Full Access</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p>To view this section, please email: misrael00@gmail.com</p>
            <p className="text-sm text-muted-foreground">(We typically respond within 1 business day.)</p>
            <div className="mt-4 pt-4 border-t">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="text-xs text-muted-foreground hover:text-primary"
              >
                Why is this gated? →
                <span className="block mt-1 text-xs">
                  These sections include proprietary strategies and frameworks we reserve for select clients.
                </span>
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
