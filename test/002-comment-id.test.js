/*globals describe, it */
var should = require('should'),
    path = require('path'),
    checker = require('../lib/checker'),
    thisCheck = require('../lib/checks/002-comment-id'),
    utils = require('./utils');

describe('002 Comment Id', function () {
    it('[failure] theme is invalid', function (done) {
        utils.testCheck(thisCheck, '002-comment-id/invalid').then(function (output) {
            output.should.be.a.ValidThemeObject();

            output.results.fail['GS002-DISQUS-ID'].failures.length.should.eql(3);
            output.results.fail['GS002-ID-HELPER'].failures.length.should.eql(4);

            output.results.fail['GS002-DISQUS-ID'].failures[0].ref.should.eql('default.hbs');
            output.results.fail['GS002-DISQUS-ID'].failures[1].ref.should.eql('index.hbs');
            output.results.fail['GS002-DISQUS-ID'].failures[2].ref.should.eql('partials/mypartial.hbs');

            output.results.fail['GS002-ID-HELPER'].failures[0].ref.should.eql('default.hbs');
            output.results.fail['GS002-ID-HELPER'].failures[1].ref.should.eql('index.hbs');
            output.results.fail['GS002-ID-HELPER'].failures[2].ref.should.eql('page.hbs');
            output.results.fail['GS002-ID-HELPER'].failures[3].ref.should.eql('partials/mypartial.hbs');

            done();
        }).catch(done);
    });
});
