import * as core from '@actions/core'
import * as event from './events'
import * as version from './version' 

export async function run(): Promise<void> {
  try {
    // implementation
    const tag = event.getCreatedTag()

    if (tag && version.isSemVer(tag)) {
      //TODO
    }

    core.setOutput('release-url', 'https://example.com')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run();

