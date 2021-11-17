export default {
  props: {
    datetime: {
      type: [String, Date],
      required: true,
    },
  },
  data: () => ({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    isPassed: false,
  }),
  methods: {
    calculate() {
      const now = Date.now();
      let limit = (this.datetime instanceof Date)
        ? this.datetime
        : new Date(this.datetime);

      limit = limit.getTime();

      if (now > limit) {
        this.isPassed = true;
        return;
      }

      let secondsLeft = (limit - now) / 1000;
      const daysLeft = Math.floor(secondsLeft / (60 * 60 * 24));
      secondsLeft =  secondsLeft % (60 * 60 * 24);
      const hoursLeft = Math.floor(secondsLeft / (60 * 60));
      secondsLeft =  secondsLeft % (60 * 60);
      const minutesLeft = Math.floor(secondsLeft / 60);
      secondsLeft =  Math.round(secondsLeft % 60);

      this.days = daysLeft > 9 ? daysLeft : `0${daysLeft}`;
      this.hours = hoursLeft > 9 ? hoursLeft : `0${hoursLeft}`;
      this.minutes = minutesLeft > 9 ? minutesLeft : `0${minutesLeft}`;
      this.seconds = secondsLeft > 9 ? secondsLeft : `0${secondsLeft}`;
    },
  },
  created() {
    const timer = setInterval(this.calculate, 1000);
    this.calculate();
    this.$on('hook:destroyed', () => {
      console.log('destroyed');
      clearInterval(timer);
    });
  },
  render() {
    return this.$scopedSlots.default({
      isPassed: this.isPassed,
      days: this.days,
      hours: this.hours,
      minutes: this.minutes,
      seconds: this.seconds,
    });
  },
};
