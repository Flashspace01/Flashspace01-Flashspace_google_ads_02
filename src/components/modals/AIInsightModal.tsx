import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, RefreshCw, Lightbulb, BarChart3, Users, Calendar } from "lucide-react";

interface AIInsightModalProps {
  type: string;
  title: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const insightData: Record<string, { loading: string; insights: { title: string; value: string; trend?: string; description: string }[] }> = {
  "Revenue Forecast": {
    loading: "Analyzing revenue patterns...",
    insights: [
      { title: "Next Month Projection", value: "₹5.2L", trend: "+12%", description: "Based on current booking trends and renewals" },
      { title: "Q1 2024 Forecast", value: "₹15.8L", trend: "+18%", description: "Strong growth expected from enterprise clients" },
      { title: "Annual Run Rate", value: "₹62L", trend: "+22%", description: "Projected annual revenue at current pace" },
    ]
  },
  "Renewal Analysis": {
    loading: "Predicting client renewals...",
    insights: [
      { title: "High Renewal Probability", value: "12 clients", trend: "92%", description: "Very likely to renew based on engagement" },
      { title: "At Risk", value: "3 clients", trend: "45%", description: "Low engagement - recommend immediate outreach" },
      { title: "Upcoming Renewals", value: "8 clients", description: "Due in the next 30 days" },
    ]
  },
  "AI Support Agent": {
    loading: "Loading client data...",
    insights: [
      { title: "Active Clients", value: "156", description: "Total active clients across all spaces" },
      { title: "Meeting Rooms Booked", value: "234 hrs", description: "This month's usage across all clients" },
      { title: "Average Contract Value", value: "₹28,500", description: "Per client per month" },
    ]
  },
  "Performance Suggestions": {
    loading: "Generating personalized suggestions...",
    insights: [
      { title: "Increase Virtual Tour Videos", value: "High Impact", description: "Spaces with tours convert 40% better" },
      { title: "Respond Faster", value: "Medium Impact", description: "Reduce response time from 4hr to 1hr" },
      { title: "Upsell Meeting Rooms", value: "Quick Win", description: "15 clients using <5% of meeting room quota" },
    ]
  },
  "Renewal Forecasting": {
    loading: "Analyzing renewal patterns...",
    insights: [
      { title: "Expected Renewals", value: "28", trend: "+8%", description: "Clients likely to renew this quarter" },
      { title: "Potential Revenue", value: "₹8.4L", description: "From expected renewals" },
      { title: "Churn Risk", value: "4 clients", description: "Low engagement - need attention" },
    ]
  },
  "Cross-Sell Suggestions": {
    loading: "Finding upsell opportunities...",
    insights: [
      { title: "Meeting Room Add-on", value: "12 clients", description: "Perfect fit based on their usage patterns" },
      { title: "Virtual Address Upgrade", value: "8 clients", description: "High potential for premium address upgrade" },
      { title: "GST Registration", value: "15 leads", description: "Interested in compliance services" },
    ]
  },
  "Performance Insights": {
    loading: "Analyzing your performance...",
    insights: [
      { title: "Your Rank", value: "#12", trend: "+3", description: "Moved up 3 positions this week" },
      { title: "Conversion Rate", value: "34%", trend: "+5%", description: "Above average for your region" },
      { title: "Top Improvement", value: "Follow-ups", description: "Increase follow-up calls by 2x for better results" },
    ]
  },
  "Revenue Predictions": {
    loading: "Forecasting your earnings...",
    insights: [
      { title: "This Month", value: "₹45K", trend: "+12%", description: "On track to exceed last month" },
      { title: "Next Month Estimate", value: "₹52K", description: "Based on pipeline and renewals" },
      { title: "Quarterly Bonus", value: "₹25K", description: "Achievable if current pace maintained" },
    ]
  },
};

export const AIInsightModal = ({ type, title, open, onOpenChange }: AIInsightModalProps) => {
  const [loading, setLoading] = useState(true);
  const data = insightData[type] || insightData["Revenue Forecast"];

  useEffect(() => {
    if (open) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [open, type]);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            {title}
            <Badge variant="secondary" className="ml-2 gap-1">
              <Sparkles className="w-3 h-3" />
              AI Powered
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
                <Sparkles className="w-6 h-6 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-muted-foreground mt-4">{data.loading}</p>
            </div>
          ) : (
            <>
              <div className="space-y-3">
                {data.insights.map((insight, index) => (
                  <div 
                    key={index} 
                    className="bg-muted/30 rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-semibold text-foreground">{insight.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">{insight.value}</span>
                        {insight.trend && (
                          <Badge className="bg-green-100 text-green-700">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {insight.trend}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">AI Recommendation</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Focus on follow-ups with high-potential leads this week. Your conversion rate shows room for 15% improvement with better timing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" onClick={handleRefresh} className="gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Refresh Insights
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
