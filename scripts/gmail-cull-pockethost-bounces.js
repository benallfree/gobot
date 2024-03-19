// from https://script.google.com/home/projects/17ksqQGd6dY8Up0dOS_o0_NLQepd-wphDYJ4HPRJkT4TdT9mRj9AUtED2/edit?pli=1
function extractTargetedEmailAddresses() {
  var label = GmailApp.getUserLabelByName('SES/Bounced')
  var threads = label.getThreads()

  var emailAddresses = new Set() // Using a set to automatically handle uniqueness

  let total = 0
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages()

    for (var j = 0; j < messages.length; j++) {
      var subject = messages[j].getSubject()
      var body = messages[j].getPlainBody()

      // Logger.log(subject)
      // Logger.log(body)

      // Regex to find the email address following the specific phrase
      var regex = /the following recipients:[\s\n]*([\w\.-]+@[\w\.-]+\.\w+)/
      var match = body.match(regex)

      if (match && match[1]) {
        const email = match[1].trim()
        Logger.log(email)
        total++
        emailAddresses.add(email) // Add the found email to the set
      }
    }
  }

  var uniqueEmailAddresses = Array.from(emailAddresses) // Convert set to array

  Logger.log(total)
  Logger.log(JSON.stringify(uniqueEmailAddresses))
  // Further code to handle the unique email addresses (like saving to a file)
}
