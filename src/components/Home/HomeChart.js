/* eslint-disable */
import { Bar, mixins } from 'vue-chartjs'

// reference: https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/ReactivePropExample.js
export default {
  names: 'HomeChart',
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    title: {
      type: String,
      require: true
    }
  },
  data () {
    return {
      options: {
        title: {
          padding: 4,
          fontSize: 16,
          display: true,
          position: 'top',
          text: this.title
        },
        responsive: true,
        maintainAspectRatio: false,
        // animation: {
        //   onProgress: function(animation) {
        //       progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;
        //     }
        // }
      }
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
