import * as React from 'react';
import {Bar, BarChart, Card, CardContent, CardDescription, CardHeader, CardTitle, CartesianGrid, ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, XAxis} from '@tryghost/shade';

interface NewsletterPerformanceProps extends React.ComponentProps<typeof Card> {};

const NewsletterPerformance: React.FC<NewsletterPerformanceProps> = (props) => {
    const chartData = [
        {metric: 'Sent', current: 1697, avg: 1524},
        {metric: 'Opened', current: 1184, avg: 867},
        {metric: 'Clicked', current: 750, avg: 478}
    ];

    const chartConfig = {
        current: {
            label: 'This post',
            color: 'hsl(var(--chart-1))'
        },
        avg: {
            label: 'Your average post',
            color: 'hsl(var(--chart-5))'
        }
    } satisfies ChartConfig;

    return (
        <Card {...props}>
            <CardHeader>
                <CardTitle>Newsletter performance</CardTitle>
                <CardDescription>
                    Sent 19 Sept 2024
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer className='-mx-1 aspect-auto h-[250px] min-h-[250px] w-[calc(100%+8px)]' config={chartConfig}>
                    <BarChart data={chartData} dataKey='metric' accessibilityLayer>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            axisLine={false}
                            dataKey="metric"
                            tickLine={false}
                            tickMargin={10}
                            hide
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="current" fill="var(--color-current)" radius={4} />
                        <Bar dataKey="avg" fill="var(--color-avg)" radius={4} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
};

export default NewsletterPerformance;
