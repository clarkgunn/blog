(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{145:function(t,e,a){t.exports=a.p+"assets/img/docker-image-Step-1.56046c3d.png"},146:function(t,e,a){t.exports=a.p+"assets/img/Screen-Shot-2018-06-03-at-17.03.04.0680dd5c.png"},147:function(t,e,a){t.exports=a.p+"assets/img/docker-image-Step-2.45d9f85e.png"},434:function(t,e,a){"use strict";a.r(e);var s=a(10),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-gitlab-s-pipeline-with-laravel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-gitlab-s-pipeline-with-laravel","aria-hidden":"true"}},[t._v("#")]),t._v(" Using GitLab's pipeline with Laravel")]),t._v(" "),s("p",[t._v("GitLab's pipelines can be scary at first (because you know... Docker) but they're really easy to setup and very helpful. Here's how I set up the pipelines of my Laravel applications on Gitlab.")]),t._v(" "),s("h2",{attrs:{id:"a-quick-docker-intro"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-docker-intro","aria-hidden":"true"}},[t._v("#")]),t._v(" A quick docker intro")]),t._v(" "),s("p",[t._v("GitLab's pipelines contain one or several jobs. Those jobs run in complete isolation. Meaning that, every time a job is ran, a new docker container is created by mounting a docker image which is created via a DockerFile.")]),t._v(" "),s("p",[t._v("I swear, it's easier than it seems. Let's go through this terminology:")]),t._v(" "),s("ul",[s("li",[t._v("Think of a "),s("strong",[t._v("docker container")]),t._v(" as the box containing your code and everything it needs (operating system, composer dependencies, etc.).")]),t._v(" "),s("li",[t._v("Think of a "),s("strong",[t._v("docker image")]),t._v(" as the factory that can create as many boxes (docker containers) as your need.")]),t._v(" "),s("li",[t._v("Think of a "),s("strong",[t._v("DockerFile")]),t._v(" as the blueprint responsible for describing how to create a new docker image.")]),t._v(" "),s("li",[t._v("A DockerFile "),s("strong",[t._v("builds")]),t._v(" a docker image that "),s("strong",[t._v("gets mounted")]),t._v(" into docker containers.")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(145),alt:"Docker image diagram"}})]),t._v(" "),s("p",[t._v("The good news is, you do not need to write your own DockerFiles. There is a place called "),s("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Hub"),s("OutboundLink")],1),t._v(" — kind of like GitHub for Docker images — where you can pull pre-configured docker images and build on top of that.")]),t._v(" "),s("h2",{attrs:{id:"new-gitlab-ci-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-gitlab-ci-file","aria-hidden":"true"}},[t._v("#")]),t._v(" New gitlab-ci file")]),t._v(" "),s("p",[t._v("Okay let's start by creating a new file named "),s("code",[t._v(".gitlab-ci.yml")]),t._v(" at the root of your application. We will configure our GitLab pipelines here.")]),t._v(" "),s("h2",{attrs:{id:"choose-your-docker-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#choose-your-docker-image","aria-hidden":"true"}},[t._v("#")]),t._v(" Choose your docker image")]),t._v(" "),s("p",[t._v("Typically you would use an existing docker image to start with, like "),s("code",[t._v("php:latest")]),t._v(" for the latest version of php. Then you'd have to manually add all of the modules and dependencies required by Laravel. GitLab has an option called "),s("code",[t._v("before_script")]),t._v(" which will be called right before the start of every job. Therefore you can use it to install your required php modules, composer, etc. In your "),s("code",[t._v(".gitlab-ci.yml")]),t._v(" file, it would look like that:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install php modules")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install composer")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])]),s("p",[t._v("However running all of those commands for every single job is very expensive. It would be much nicer (and reduce our pipeline quota) if the mounted image already had everything that we need.")]),t._v(" "),s("p",[t._v("That's why I created my own DockerFile "),s("code",[t._v("lorisleiva/laravel-docker")]),t._v(" which contains all of the dependencies required by Laravel. I uploaded its image into "),s("a",{attrs:{href:"https://hub.docker.com/r/lorisleiva/laravel-docker/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker hub"),s("OutboundLink")],1),t._v(" so that we can use it directly in our pipeline configuration file.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lorisleiva/laravel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("docker"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("latest\n")])])]),s("p",[t._v("And we're all good to go. After mounting the image, GitLab will automatically "),s("code",[t._v("clone")]),t._v(" and "),s("code",[t._v("cd")]),t._v(" into your repository. Now let's have fun configuring some jobs.")]),t._v(" "),s("GithubButton",{attrs:{url:"https://github.com/lorisleiva/laravel-docker",title:"See laravel-docker on GitHub"}}),t._v(" "),s("h2",{attrs:{id:"running-our-test-suite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-our-test-suite","aria-hidden":"true"}},[t._v("#")]),t._v(" Running our test suite")]),t._v(" "),s("p",[t._v("The first job I'd like to set up, is simply one that runs all of our tests. This job will be successful if and only if all tests are passing. This should be as easy as:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is the name of our job, call it whatever you want.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("phpunit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is used to categorize jobs. Jobs within the same stage are run in parallel.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This is the list of commands executed by the job.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" phpunit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("coverage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("colors=never\n")])])]),s("p",[t._v("However this is not going to work because our Laravel application is missing its "),s("code",[t._v("vendor")]),t._v(" folder, its "),s("code",[t._v(".env")]),t._v(" file and thus its encryption key. So before running our tests we need to make sure our application is initialized properly.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("phpunit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" composer install "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("prefer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dist "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ansi "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("interaction "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("progress "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("no"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("scripts\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" cp .env.example .env\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" php artisan key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("generate\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" phpunit "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("coverage"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("text "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("colors=never\n")])])]),s("p",[s("small",[t._v("Note that these commands can only be ran once our Laravel application has been cloned and therefore cannot be added to our DockerFile: "),s("code",[t._v("lorisleiva/laravel-docker")]),t._v(".")])]),t._v(" "),s("p",[t._v("And that's it. Now every time you commit into your master branch, GitLab will start the "),s("code",[t._v("phpunit")]),t._v(" job letting you know of its status via a little pass or fail icon.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(146),alt:"GitLab success and fail pipeline icon"}})]),t._v(" "),s("h2",{attrs:{id:"checking-our-code-style"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#checking-our-code-style","aria-hidden":"true"}},[t._v("#")]),t._v(" Checking our code style")]),t._v(" "),s("p",[t._v("Another nice job to implement is checking your code for some code style violations. Our docker image already contains the "),s("code",[t._v("PHP_CodeSniffer")]),t._v(" pear extension. Thus all you need to do is run "),s("code",[t._v("phpcs")]),t._v(".")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("codestyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Let's run that in parallel with phpunit.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We'll comply with the PSR2 standard and check all .php file in our app folder.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" phpcs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("standard=PSR2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("extensions=php app\n")])])]),s("h2",{attrs:{id:"caching-our-vendors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#caching-our-vendors","aria-hidden":"true"}},[t._v("#")]),t._v(" Caching our vendors")]),t._v(" "),s("p",[t._v("You might have noticed that, so far, every time a "),s("code",[t._v("phpunit")]),t._v(" job runs, composer installs all of the dependencies from scratch. We can improve the performance of our pipelines by caching and sharing the "),s("code",[t._v("vendor")]),t._v(" folder across all of the commits of one branch.")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We key the cache using the branch's unique identifier.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("key")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("CI_COMMIT_REF_SLUG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We only want to cache the vendor folder.")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" vendor/\n")])])]),s("p",[t._v("This will cache and share the "),s("code",[t._v("vendor")]),t._v(" folder across all of our jobs. However our "),s("code",[t._v("codestyle")]),t._v(" job does not need any composer dependencies and therefore does not need the "),s("code",[t._v("vendor")]),t._v(" folder altogether. We can disable the cache for one particular job like so:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("codestyle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("stage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Override with an empty object.")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" phpcs "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("standard=PSR2 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("extensions=php app\n")])])]),s("h2",{attrs:{id:"conclusion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),s("p",[t._v("As you can see on the diagram below, GitLab allows us to abstract the complexity of docker behind a simple configuration file.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(147),alt:"Docker image diagram summary"}})]),t._v(" "),s("p",[t._v("There is a lot more that can be done but this should help you getting started with GitLab's pipelines for your Laravel applications. Feel free to share your job ideas here and I might write a little series of articles that will help you improve your CI/CD.")]),t._v(" "),s("GithubButton",{attrs:{url:"https://github.com/lorisleiva/laravel-docker/blob/master/gitlab/.gitlab-ci.tests.yml"}}),t._v(" "),s("p",[s("em",[t._v("Edit 12/06/2018:")]),t._v(" Learn how to use GitLab's pipeline to build, test and deploy your Laravel applications in my "),s("a",{attrs:{href:"/laravel-deployment-using-gitlab-pipelines"}},[t._v("next article")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);