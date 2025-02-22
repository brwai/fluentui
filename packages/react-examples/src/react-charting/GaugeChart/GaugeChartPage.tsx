import * as React from 'react';

import {
  ComponentPage,
  ExampleCard,
  IComponentDemoPageProps,
  PropertiesTableSet,
} from '@fluentui/react-docsite-components';

import { GaugeChartBasicExample } from './GaugeChart.Basic.Example';
import { GaugeChartVariantExample } from './GaugeChart.Variant.Example';

const GaugeChartBasicExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/GaugeChart/GaugeChart.Basic.Example.tsx') as string;
const GaugeChartVariantExampleCode =
  require('!raw-loader?esModule=false!@fluentui/react-examples/src/react-charting/GaugeChart/GaugeChart.Variant.Example.tsx') as string;

export class GaugeChartPage extends React.Component<IComponentDemoPageProps, {}> {
  public render(): JSX.Element {
    return (
      <ComponentPage
        title="Gauge Chart"
        componentName="GaugeChartExample"
        exampleCards={
          <div>
            <ExampleCard title="GaugeChart basic" code={GaugeChartBasicExampleCode}>
              <GaugeChartBasicExample />
            </ExampleCard>
            <ExampleCard title="GaugeChart variant" code={GaugeChartVariantExampleCode}>
              <GaugeChartVariantExample />
            </ExampleCard>
          </div>
        }
        propertiesTables={
          <PropertiesTableSet
            sources={[
              require<string>('!raw-loader?esModule=false!@fluentui/react-charting/src/components/GaugeChart/GaugeChart.types.ts'),
            ]}
          />
        }
        isHeaderVisible={this.props.isHeaderVisible}
        overview={
          <div>
            <p>
              Gauge chart measures the progress of a metric against its target and its primary components are a
              speedometer and a needle. The speedometer usually consists of color-coded segments progressing value from
              left to right.
            </p>
            <h3>Implementation details</h3>
            <ul>
              <li>
                The diameter of the gauge depends upon the <code>width</code> and <code>height</code> props passed to
                the chart. If the props are omitted, a default diameter of 140px will be used.
              </li>
              <li>
                To render a title above the gauge, set the <code>chartTitle</code> prop.
              </li>
              <li>
                The needle position depends upon the required <code>chartValue</code> prop.
              </li>
              <li>
                Use the required <code>segments</code> prop to divide the gauge into colored sections. These sections
                can have fixed sizes, or the users can choose to create a sweeping effect by varying the segment size
                with the chartValue.
              </li>
              <li>
                Set the <code>minValue</code> prop if the minimum value of the gauge is different than 0. A placeholder
                segment will be rendered if the <code>maxValue</code> prop is greater than the total size of the
                segments.
              </li>
              <li>
                To render an additional text below the chartValue, set the <code>sublabel</code> prop.
              </li>
              <li>
                To hide the minimum and maximum values of the gauge, set the <code>hideMinMax</code> prop.
              </li>
              <li>
                The chartValue prop is rendered as a percentage by default. Set the <code>chartVaueFormat</code> prop to
                'fraction' or a formatter function.
              </li>
            </ul>
          </div>
        }
      />
    );
  }
}
