import React from 'react'
import { FormControl, FormDescription,FormItem,FormLabel,FormMessage} from '@/components/ui/form';
import {Input} from "@/components/ui/input";

const FormField = () => {
  return (
    <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
  )
}

export default FormField
