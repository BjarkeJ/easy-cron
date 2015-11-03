#easy-cron
**easy-cron** is a simple node module that helps you set up cron jobs with out remembering what cron patterns such as '*/5 * * * *' means. Instead specify your cron job using human language: "Every five minutes".

# INSTALLATION

Install easy-cron through node package manager:

```npm install easy-cron```

If you want to save it to your project do:

```npm install --save easy-cron```


## USAGE

Using easy-cron is simple:

```
var easyCron = require('easy-cron');

var cronPattern = easyCron('Every five minutes'); // returns '*/5 * * * *'
```

## SUGGESTIONS

Do you have any suggestions for improvements to this module? If you are node developer you are always welcome to contribute or you can submit your idea at Did you experience any bugs? Please submit an issue https://github.com/BjarkeJ/easy-cron/issues/new

## BUGS

Did you experience any bugs? Please submit an issue https://github.com/BjarkeJ/easy-cron/issues/new

## CONTRIBUTIONS

Simply do a pull requests

## PATTERNS

http://crontab.org/