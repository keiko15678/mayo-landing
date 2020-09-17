function init() {
  $('#sectionBtnBox').hide()
  $('#sectionTitleCircle1').hide()
  $('#sectionTitleCircle2').hide()
  $('#sectionTitleCircle3').hide()
  $('#sectionTitle').css({ transform: 'translateY(100%)' })
  $('.sec1').hide()
  $('.sec1SlideInTextBox').hide()
  $('.sec1__phoneInner').hide()
  $('.sec1InfoCard').hide()
  $('.sec1InfoText').hide()
  $('.sec1InfoCard__p2').hide()
  $('.sec1InfoCard__p2BgTop').hide()
  $('.sec1InfoCard__p2BgBottom').hide()
  $('.sec1InfoText--p2').hide()
  $('.sec1InfoText--p3').hide()
  $('.sec1InfoCard__p3').hide()
  $('.sec1InfoText--p4').hide()
  $('.sec1InfoCard__p4').hide()
  $('.sec1InfoText--p5').hide()
  // $('.sec1InfoCard__p5').hide()
  $('.sec1InfoCard__p5Top').hide()
  $('.sec1InfoCard__p5Mid').hide()
  $('.sec1InfoCard__p5Bot').hide()
  $('.sec1InfoText--p6').hide()
}

window.addEventListener('load', function () {
  init()

  $('#bannerBtn').click(function () {
    $('.carousel__item').fadeOut({
      progress: function (animation, progress, remainingMs) {
        // if (remainingMs <= 600) {
        $(this).css({
          transition: 'transform .9s ease-in-out',
          transform: 'translateY(-100%)',
          WebkitTransition: 'transform .9s ease-in-out',
          MozTransition: 'transform .9s ease-in-out',
          MsTransition: 'transform .9s ease-in-out',
          OTransition: 'transform .9s ease-in-out',
          transition: 'transform .9s ease-in-out'
        })
        // }
      },
      duration: 1200
    })
    $('#banner').slideUp({
      duration: 1200,
      complete: () => {
        $('#sectionBtnBox').fadeIn()
        $('#bannerBtn')
          .css({
            transform: 'rotate(360deg)'
          })
          .hide({
            complete: function () {
              $('#sectionBtn').show()
            }
            // duration: 1200
          })
      }
    })
    $('#sectionTitle').fadeIn({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(0%)'
        })
      },
      duration: 1200
    })
    $('#sectionSubtitle').fadeIn({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(0%)'
        })
      },
      duration: 1200
    })
  })

  $('#sectionBtn').click(function () {
    $('#sectionBtnBox').fadeOut({ complete: () => {} })
    $('.carousel__item').fadeIn({
      progress: function (animation, progress, remainingMs) {
        // if (remainingMs <= 600) {
        $(this).css({
          transition: 'transform .9s ease-in-out',
          transform: 'translateY(0%)',
          WebkitTransition: 'transform .9s ease-in-out',
          MozTransition: 'transform .9s ease-in-out',
          MsTransition: 'transform .9s ease-in-out',
          OTransition: 'transform .9s ease-in-out',
          transition: 'transform .9s ease-in-out'
        })
        // }
      },
      duration: 1200
    })

    $('#sectionSubtitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(-50%)'
        })
      },
      duration: 1200
    })
    $('#sectionTitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(100%)'
        })
      },
      duration: 1200
    })
    $('#banner').slideDown({
      duration: 1200,
      complete: () => {
        $('#sectionBtnBox').fadeOut()
        $('#sectionBtn')
          .css({
            transform: 'rotate(360deg)'
          })
          .hide({
            complete: function () {
              $('#bannerBtn').show()
            }
            // duration: 1200
          })
      }
    })
  })

  $('.section__btnCircle1').click(function () {
    $('body').css({
      'overflow-y': 'auto',
      'overflow-x': 'hidden'
    })
    $('.sec1').show().css({ bottom: '-100%' })

    $('#sectionBtn').hide()
    $('.section__btn2').fadeOut()
    $('.section__btn3').fadeOut({
      complete: function () {
        $('.section__btn1').css({
          transition: 'transform .6s',
          transform: 'scale(1.5) translate(50%, 50%)',
          position: 'absolute',
          'z-index': '7'
        })
      }
    })
    $('#sectionSubtitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(-100%)'
          // 'z-index': '3'
        })
      },
      duration: 600
    })
    $('#sectionTitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(-50%)'
        })
      },
      complete: function () {
        $('#sectionTitleCircle1').fadeIn({
          start: function () {
            $(this).css({
              // transition: 'transform .9s',
              transform: 'translateY(45%)'
            })
          },
          duration: 600
        })
      },
      duration: 600
    })
  })

  $('.section__btnCircle2').click(function () {
    $('body').css({
      'overflow-y': 'auto',
      'overflow-x': 'hidden'
    })
    $('#sectionBtn').hide()
    $('.section__btn1').fadeOut()
    $('.section__btn3').fadeOut({
      complete: function () {
        $('.section__btn2').css({
          transition: 'transform .6s',
          transform: 'scale(2) translateX(-30%) translateY(5%)'
        })
      }
    })
    $('#sectionSubtitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(-100%)'
        })
      },
      duration: 600
    })
    $('#sectionTitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(-50%)'
        })
      },
      complete: function () {
        $('#sectionTitleCircle2').fadeIn({
          start: function () {
            $(this).css({
              // transition: 'transform .9s',
              transform: 'translateY(55%)',
              cursor: 'inherit'
            })
          },
          duration: 600
        })
      },
      duration: 600
    })
  })

  $('.section__btnCircle3').click(function () {
    $('body').css({
      'overflow-y': 'auto',
      'overflow-x': 'hidden'
    })
    $('#sectionBtn').hide()
    $('.section__btn1').fadeOut()
    $('.section__btn2').fadeOut({
      complete: function () {
        $('.section__btn3').css({
          transition: 'transform .6s',
          transform: 'scale(1.5) translate(25%, -50%)'
        })
      }
    })
    $('#sectionSubtitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(-100%)'
        })
      },
      duration: 600
    })
    $('#sectionTitle').fadeOut({
      start: function () {
        $(this).css({
          transition: 'transform .9s',
          transform: 'translateY(-50%)'
        })
      },
      complete: function () {
        $('#sectionTitleCircle3').fadeIn({
          start: function () {
            $(this).css({
              // transition: 'transform .9s',
              transform: 'translateY(55%)',
              cursor: 'inherit'
            })
          },
          duration: 600
        })
      },
      duration: 600
    })
  })

  // $(window).scroll(function () {
  //   var wintop = $(window).scrollTop(),
  //     docheight = $(document).height(),
  //     winheight = $(window).height()
  //   var scrolltrigger = 0.95

  //   console.log(wintop)
  //   // if (wintop / (docheight - winheight) > scrolltrigger) {
  //   //   //console.log('scroll bottom');
  //   //   lastAddedLiveFunc()
  //   // }

  //   if (circle3Clicked) {
  //   }
  // })

  // let $animation_elements = ['.section__btnCircle1']

  function check_if_in_view() {
    var window_height = $(window).height()
    var window_top_position = $(window).scrollTop()
    var window_bottom_position = window_top_position + window_height

    $animation_elements.forEach((item) => {
      var $element = $(item)
      var element_height = $element.outerHeight()
      var element_top_position = $element.offset().top
      var element_bottom_position = element_top_position + element_height

      //check to see if this current container is within viewport
      if (
        element_bottom_position >= window_top_position &&
        element_top_position <= window_bottom_position
      ) {
        $element.addClass('in-view')
      } else {
        $element.removeClass('in-view')
      }
    })
    // $.each($animation_elements, () => {
    //   var $element = $(this)
    //   var element_height = $element.outerHeight()
    //   var element_top_position = $element.offset().top
    //   var element_bottom_position = element_top_position + element_height

    //   //check to see if this current container is within viewport
    //   if (
    //     element_bottom_position >= window_top_position &&
    //     element_top_position <= window_bottom_position
    //   ) {
    //     $element.addClass('in-view')
    //   } else {
    //     $element.removeClass('in-view')
    //   }
    // })
  }

  // $(window).on('scroll', check_if_in_view)
  // $(window).on('scroll resize', check_if_in_view)
  // $(window).trigger('scroll')

  let step = 0
  // let stepActivated = false

  $(window).on('scroll', function () {
    console.log(window.scrollY)
    console.log('STEP: ', step)
  })

  $(window).on('scroll', function () {
    $('.section__btnTitle1').hide()
    $('.section__btnSubtitle1').hide()
    $('.sectionText__title').hide()

    if (window.scrollY === 100 && step === 0) {
      $('.sec1').css({ bottom: '118%' })
      $('.section__btnCircle1').animate(
        { borderSpacing: -90 },
        {
          step: function (now, fx) {
            $(this).css({
              transition: 'transform .9s, border-radius .9s',
              transform: 'translate(-89%, 0%)',
              'border-radius': '4px',
              height: '300px'
            })
          },
          duration: 'slow',
          done: () => {
            $('.sec1__phoneCopy1--left').css({
              transition: 'transform .9s',
              transform: 'translate(calc(-50% + -70%), -32%)'
            })
            $('.sec1__phoneCopy1--right').css({
              transition: 'transform .9s',
              transform: 'translate(calc(-50% + 70%), -32%)'
            })
            $('.sec1__phoneCopy2--left').css({
              transition: 'transform .9s',
              transform: 'translate(calc(-50% + -140%), -32%)'
            })
            $('.sec1__phoneCopy2--right').css({
              transition: 'transform .9s',
              transform: 'translate(calc(-50% + 140%), -32%)'
            })
            step = 1
          }
        },
        'linear'
      )
    } else if (window.scrollY === 200 && step === 1) {
      step = 2
      $('.section__btnCircle1').animate(
        { borderSpacing: -90 },
        {
          step: function (now, fx) {
            $('.sec1__phoneCopy1--left').css({
              transition: 'transform .9s',
              transform: 'translate(-50%, -32%)'
            })
            $('.sec1__phoneCopy1--right').css({
              transition: 'transform .9s',
              transform: 'translate(-50%, -32%)'
            })
            $('.sec1__phoneCopy2--left').css({
              transition: 'transform .9s',
              transform: 'translate(-50%, -32%)'
            })
            $('.sec1__phoneCopy2--right').css({
              transition: 'transform .9s',
              transform: 'translate(-50%, -32%)'
            })
          },
          duration: 'slow',
          done: () => {
            $('.sec1__text').fadeOut({
              complete: () => {
                $(this).css({
                  transition: 'transform .6s',
                  transform: 'translateX(-50%)'
                })
              }
            })
            $('.sec1__phoneCopy1').hide()
            $('.sec1__phoneCopy2').hide()
            $('.sec1__phoneBtn').fadeOut()
            $('.section__btnCircle1').animate(
              { borderSpacing: -90 },
              {
                step: (now, fx) => {
                  $('.sec1').css({
                    bottom: '90%',
                    'flex-direction': 'row'
                  })
                  $('.section__btnCircle1').css({
                    transition:
                      'transform .9s, border-radius .9s, height: .9s, width: .9s',
                    transform: 'translate(-865%, 476%)',
                    'border-radius': '50%',
                    height: '40px',
                    width: '40px'
                  })
                  $('.sec1__phone').animate(
                    { borderSpacing: -90 },
                    {
                      step: () => {
                        // $('.sec1__phone').css({
                        //   transition: 'transform .9s',
                        //   transform: 'translate(-50%, 0%)'
                        // })
                      },
                      done: () => {
                        $('.sec1__phone').css({
                          transition: 'transform .9s',
                          transform: 'translate(-50%, 0%)'
                        })
                        $('.sec1SlideInTextBox').show()
                        $('.sec1SlideInTextBox').css({
                          transform: 'translate(0%, 0%)'
                        })
                        $('.sec1__phoneInner').fadeIn({ duration: 600 })
                      }
                    }
                  )
                },
                done: () => {}
              }
            )
          }
        },
        'linear'
      )
    } else if (window.scrollY === 300 && step === 2) {
      $('.section__btnCircle1').animate(
        { borderSpacing: -90 },
        {
          start: () => {
            $('.sec1').css({
              bottom: '78%',
              'flex-direction': 'row'
            })

            $('.sec1__phone').hide()
            $('.sec1SlideInTextBox__text').slideUp()
            $('.sec1SlideInTextBox__progBar').fadeOut({
              start: () => {},
              complete: () => {
                // $('.sec1')
                //   .animate(
                //     { borderSpacing: -90 },
                //     {
                //       start: () => {
                //       }
                //     }
                //   )
                //   .animate(
                //     { borderSpacing: -90 },
                //     {
                //       start: () => {
                //         // $('.sec1SlideInTextBox').css({
                //         //   display: 'none',
                //         //   width: '0'
                //         // })
                //         // $('.sec1InfoCard').show()
                //       },
                //       done: () => {}
                //     },
                //     'linear'
                //   )
              }
            })
          },
          done: () => {
            $('.section__btnCircle1').css({
              transition: 'transform 1.2s',
              transform: 'translate(-925%, 600%)'
            })
            $('.sec1SlideInTextBox').css({
              display: 'none',
              width: '0',
              position: 'absolute'
            })

            $('.sec1InfoCard').show().css({
              transform: 'translate(0%, 0%)',
              width: '600px',
              height: '500px'
            })
            $('.sec1InfoText--p1').fadeIn({ duration: 1200 })
            step = 3
          }
        },
        'linear'
      )
    } else if (window.scrollY === 400 && step === 3) {
      $('.sec1').css({ bottom: '50%', height: '1000px' })
      $('.sec1InfoText--p1').fadeOut()
      $('.sec1InfoCard__left').fadeOut()
      $('.sec1InfoCard__right').fadeOut({
        complete: () => {
          $('.sec1InfoCard').css({
            transform: 'translate(0%, -25%)',
            height: '300px',
            width: '250px',
            'padding-top': '0px',
            padding: '16px'
          })
          $('.section__btnCircle1').css({
            transform: 'translate(-925%, 840%)'
          })
          $('.sec1InfoText--p2').fadeIn({ duration: 1200 })
          $('.sec1InfoCard__p2').show()
          $('.sec1InfoCard__p2BgTop').fadeIn({ duration: 1200 })
          $('.sec1InfoCard__p2BgBottom').show({
            complete: () => {
              step = 4
              $('.sec1InfoCard__p2BgBottom').animate(
                { borderSpacing: -90 },
                {
                  start: () => {
                    $('.sec1InfoCard__p2BgBottom').css({
                      transform: 'translate(0%, 0%)'
                    })
                  },

                  duration: 1200
                },
                'linear'
              )
            }
          })
        }
      })
    } else if (window.scrollY === 500 && step === 4) {
      $('.sec1').animate(
        { borderSpacing: -90 },
        {
          done: () => {
            $('.sec1').css({
              bottom: '42%'
            })
          }
        }
      )
      $('.sec1InfoText--p2').fadeOut()
      $('.sec1InfoCard__p2').fadeOut()
      $('.sec1InfoCard__p2BgBottom').animate(
        { borderSpacing: -90 },
        {
          start: () => {
            $('.sec1InfoCard__p2BgTop').animate(
              { borderSpacing: -90 },
              {
                start: () => {
                  $('.section__btnCircle1').css({
                    transform: 'translate(-442%, 600%)',
                    height: '55px',
                    width: '55px'
                  })
                  $('.sec1InfoCard__p2BgBottom').css({
                    transform: 'translateY(-2000px)',
                    transition: 'transform 1.2s'
                  })
                  $('.sec1InfoCard__p2BgTop').css({
                    transform: 'translateY(-2000px)',
                    transition: 'transform 1.4s'
                  })
                }
              }
            )
          },
          step: () => {
            $('.sec1InfoText--p3')
              .css({ 'margin-left': '130px' })
              .fadeIn({ duration: 1200 })
            $('.sec1InfoCard').css({
              transition: 'transform 1.2s flex .3s',
              transform: 'translate(25%, 0%)',
              // flex: '0 0 33%',
              width: '350px',
              overflow: 'auto',
              height: '600px'
            })
            $('.sec1InfoCard__p3').fadeIn({ duration: 1200 })
          },
          done: () => {
            step = 5
          }
        }
      )
    } else if (window.scrollY === 600 && step === 5) {
      $('.sec1').animate(
        { borderSpacing: -90 },
        {
          done: () => {
            $('.sec1').css({
              bottom: '62%'
            })
          }
        }
      )
      $('.sec1InfoText--p3').fadeOut()
      $('.sec1InfoCard__p3').fadeOut()
      $('.sec1InfoCard').animate(
        { borderSpacing: -90 },
        {
          start: () => {
            $('.sec1InfoCard').animate(
              { borderSpacing: -90 },
              {
                start: () => {
                  $('.section__btnCircle1').animate(
                    { borderSpacing: -90 },
                    {
                      done: () => {
                        $('.section__btnCircle1').css({
                          transition: 'transform 1.2s',
                          transform: 'translate(322%, 1200%)',
                          height: '35px',
                          width: '35px'
                        })
                        step = 6
                      }
                    }
                  )
                  $('.sec1InfoCard').css({
                    overflow: 'hidden',
                    transition: 'transform 1.8s',
                    transform: 'translate(1025%, 0%)'
                  })
                  $('.sec1InfoText--p3').css({
                    transition: 'transform 0.9s',
                    transform: 'translate(1025%, 0%)'
                  })
                },
                complete: () => {
                  $('.sec1InfoText--p4')
                    .show()
                    .css({ transform: 'translate(-15%, 140%)', order: '-1' })
                  $('.sec1InfoCard__p4')
                    .show()
                    .css({ transform: 'translate(0%, 0%)', order: '2' })
                  $('.sec1Info').css({ order: '1' })
                  $('.sec1InfoCard').css({
                    transition: 'transform 1.2s',
                    transform: 'translate(0%, 50%)',

                    width: '700px',
                    height: '700px',
                    'background-color': 'transparent'
                  })
                }
              },
              'linear'
            )
          }
        },
        'linear'
      )
    } else if (window.scrollY === 700 && step === 6) {
      $('.sec1').animate(
        { borderSpacing: -90 },
        {
          done: () => {
            $('.sec1').css({
              bottom: '62%'
            })
          }
        }
      )
      $('.sec1InfoCard').animate(
        { borderSpacing: -90 },
        {
          start: () => {
            $('.sec1InfoText--p4').fadeOut()
            $('.sec1InfoCard__p4').fadeOut()
            $('.sec1InfoCard').css({
              transform: 'translate(-1000%, 0%)'
            })
          },
          step: () => {
            $('.section__btnCircle1').animate(
              { borderSpacing: -90 },
              {
                start: () => {
                  $('.section__btnCircle1').css({
                    transition: 'transform 1.2s height 1.2s',
                    transform: 'translate(-650%, 940%)',
                    height: '55px',
                    width: '55px'
                  })
                  $('.sec1InfoCard').css({
                    transform: 'translate(0%, 0%)',
                    overflow: 'inherit'
                  })
                  $('.sec1InfoCard__p5Top').show().css({
                    order: '2',
                    transform: 'translate(-15%, 190%)',
                    transition: 'transform 1.2s'
                  })

                  $('.sec1InfoCard__p5Mid').show().css({
                    order: '2',
                    transform: 'translate(150px, 200%)',
                    transition: 'transform 1.2s'
                  })

                  $('.sec1InfoCard__p5Bot').show().css({
                    order: '2',
                    transition: 'top 1.2s',
                    top: '127%'
                  })

                  $('.sec1InfoText--p5').css({ order: '-1' }).fadeIn()
                  $('.sec1InfoCard__p5').css({ order: '2' }).show()

                  step = 7
                }
              }
            )
          }
        }
      )
    } else if (window.scrollY >= 800 && step === 7) {
      step = 8
      $('.section__btnCircle1').css({
        // transform: 'translate(-100%, 800%)'
        transform: 'translate(-50%, 1100%)'
      })
      $('.sec1InfoCard').css({
        // display: 'none'
        transform: 'translate(100%, 0%)'
        // overflow: 'inherit'
      })
      $('.sec1InfoText--p5').animate(
        { borderSpacing: -90 },
        {
          start: () => {
            $('.sec1InfoText--p5').css({
              display: 'none',
              transform: 'translateY(-1000%)'
            })
            $('.sec1InfoCard__p5').css({
              display: 'none',
              transform: 'translateY(-1000%)'
            })
            $('.sec1InfoCard__p5Top').css({
              display: 'none',
              width: '0',
              height: '0'
            })
            $('.sec1InfoCard__p5TopTitleBlock').css({
              display: 'none',
              // transform: ''
              width: '0',
              height: '0'
            })
            $('.sec1InfoCard__p5TopBodyBlock').css({
              display: 'none',
              // transform: ''
              width: '0',
              height: '0'
            })
            $('.sec1InfoCard__p5MidTitle').css({
              display: 'none',
              // transform: ''
              width: '0',
              height: '0'
            })
            $('.sec1InfoCard__p5MidBlock').css({
              display: 'none',
              width: '0',
              height: '0'
            })
            $('.sec1InfoCard__p5Mid').css({
              display: 'none',
              width: '0',
              height: '0'
            })
            $('.sec1InfoCard__p5Bot').css({
              display: 'none',
              transform: 'translateY(-1000%)'
            })
          },
          done: () => {
            $('.sec1InfoText--p6').fadeIn()
          }
        },
        'linear'
      )
    }
  })
})
